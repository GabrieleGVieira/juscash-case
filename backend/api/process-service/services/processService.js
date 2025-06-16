import prisma from '../../prisma/prismaClient.js';
import normalize from "../../utils/normalize.js"

export class ProcessService {
async getProcesses(filters) {
  console.log(filters)
  if (!filters) {
    return await prisma.processo.findMany();
  }

  const normalizedFilter = normalize(filters.params || '');
  const filterParam = `%${normalizedFilter}%`;

  const params = [filterParam, filterParam, filterParam, filterParam];
  const whereParts  = [];

  whereParts.push(`
    (
      unaccent(regexp_replace(numero_processo, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($1)
      OR unaccent(regexp_replace(advogados, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($2)
      OR unaccent(regexp_replace(reu, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($3)
      OR unaccent(regexp_replace(autores, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($4)
    )
  `);

  if (filters.data_inicial && filters.data_final) {
    params.push(new Date(filters.data_inicial));
    params.push(new Date(filters.data_final));
    whereParts.push(`data_disponibilizacao BETWEEN $${params.length - 1} AND $${params.length}`);
  } else if (filters.data_inicial) {
    params.push(new Date(filters.data_inicial));
    whereParts.push(`data_disponibilizacao >= $${params.length}`);
  } else if (filters.data_final) {
    params.push(new Date(filters.data_final));
    whereParts.push(`data_disponibilizacao <= $${params.length}`);
  }

  const whereClause = whereParts.length > 0 ? `WHERE ${whereParts.join(' AND ')}` : '';

  const query = `
    SELECT *
    FROM processo
    ${whereClause};
  `;

  const results = await prisma.$queryRawUnsafe(query, ...params);

  return results;
}


  async updateStatus(hash_id, newStatus) {
    const process = await prisma.processo.findUnique({ where: { hash_id: hash_id } });
    if (!process) throw new Error('Processo não encontrado');

    return await prisma.processo.update({
      where: { hash_id: hash_id },
      data: { status: newStatus },
    });
  }
}
