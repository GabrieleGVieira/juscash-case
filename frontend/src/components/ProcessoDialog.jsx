"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ProcessoDialog({ trigger, processo }) {
  const [showFullContent, setShowFullContent] = useState(false);

  if (!processo) return null;

  const conteudo = processo.conteudo_publicacao || "-";
  const isLong = conteudo.length > 200;
  const displayContent = showFullContent ? conteudo : conteudo.slice(0, 200);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <p>Publicação - {processo.numero_processo}</p>
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-2 mt-4 text-sm">
          <p>
            <strong>Data de Disponibilização:</strong>
          </p>
          <p>
            {new Date(processo.data_disponibilizacao).toLocaleDateString(
              "pt-BR"
            )}
          </p>

          <p>
            <strong>Autor(es):</strong>
          </p>
          <p>{processo.autores || "-"}</p>

          <p>
            <strong>Réu:</strong>
          </p>
          <p>{processo.reu || "-"}</p>

          <p>
            <strong>Advogados:</strong>
          </p>
          <p>{processo.advogados || "-"}</p>

          <p>
            <strong>Valor principal bruto/líquido:</strong>
          </p>
          <p>{processo.valor_principal_bruto_liquido || "-"}</p>

          <p>
            <strong>Valor dos juros moratórios:</strong>
          </p>
          <p>{processo.juros_moratorios || "-"}</p>

          <p>
            <strong>Juros dos honorários advocatícios:</strong>
          </p>
          <p>{processo.honorarios_adv || "-"}</p>

          <div>
            <p>
              <strong>Conteúdo da Publicação:</strong>
            </p>
            <p className="whitespace-pre-wrap">
              {displayContent}
              {!showFullContent && isLong && "..."}
            </p>

            {isLong && (
              <Button
                variant="link"
                className="px-0 mt-1 text-blue-600 hover:underline"
                onClick={() => setShowFullContent(!showFullContent)}
              >
                {showFullContent ? "Ver menos" : "Ver mais"}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
