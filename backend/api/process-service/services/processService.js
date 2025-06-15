import prisma from '../../prisma/prismaClient.js';

export class ProcessService {
  async getProcesses(filters) {
    return await prisma.processo.findMany({
      where: {
        numero_processo: filters.numero_processo || undefined,
        status: filters.status || undefined,
        data_disponibilizacao: filters.data_disponibilizacao
          ? new Date(filters.data_disponibilizacao)
          : undefined,
      },
    });
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
