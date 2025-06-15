-- CreateTable
CREATE TABLE "processo" (
    "id" SERIAL NOT NULL,
    "hash_id" TEXT NOT NULL,
    "data_disponibilizacao" TIMESTAMP(3) NOT NULL,
    "numero_processo" TEXT,
    "autores" TEXT,
    "advogados" TEXT,
    "reu" TEXT,
    "conteudo_publicacao" TEXT,
    "valor_principal_bruto_liquido" TEXT,
    "juros_moratorios" TEXT,
    "honorarios_adv" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Nova',

    CONSTRAINT "processo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "processo_hash_id_key" ON "processo"("hash_id");
