import prisma from '../../prisma/prismaClient.js';
import normalize from "../../utils/normalize.js"

export class ProcessService {
async getProcesses(params, data_inicial, data_final) {
  if (!params && !data_final && !data_inicial) {
    return await prisma.processo.findMany();
  }

  const normalizedFilter = normalize(params || '');
  const filterParam = `%${normalizedFilter}%`;

  const paramsNormalizaed = [filterParam, filterParam, filterParam, filterParam];
  const whereParts  = [];

  whereParts.push(`
    (
      unaccent(regexp_replace(numero_processo, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($1)
      OR unaccent(regexp_replace(advogados, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($2)
      OR unaccent(regexp_replace(reu, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($3)
      OR unaccent(regexp_replace(autores, '[^a-zA-Z0-9]', '', 'g')) ILIKE unaccent($4)
    )
  `);

  if (data_inicial && data_final) {
    paramsNormalizaed.push(new Date(data_inicial));
    paramsNormalizaed.push(new Date(data_final));
    whereParts.push(`data_disponibilizacao BETWEEN $${paramsNormalizaed.length - 1} AND $${paramsNormalizaed.length}`);
  } else if (data_inicial) {
    paramsNormalizaed.push(new Date(data_inicial));
    whereParts.push(`data_disponibilizacao >= $${paramsNormalizaed.length}`);
  } else if (data_final) {
    paramsNormalizaed.push(new Date(data_final));
    whereParts.push(`data_disponibilizacao <= $${paramsNormalizaed.length}`);
  }

  const whereClause = whereParts.length > 0 ? `WHERE ${whereParts.join(' AND ')}` : '';

  const query = `
    SELECT *
    FROM processo
    ${whereClause};
  `;

  const results = await prisma.$queryRawUnsafe(query, ...paramsNormalizaed);

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
