"use client";
import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { KanbanCard } from "../../../components/KanbanCard";
import { KanbanColumn } from "../../../components/KanbanColumn";
import { ProcessoDialog } from "../../../components/ProcessoDialog";
import { SearchFilter } from "../../../components/SearchFilter";
import Image from "next/image";

export default function Kanban() {
  const [processos, setProcessos] = useState([]);

  async function fetchData(filtros) {
    try {
      const queryString = new URLSearchParams(filtros).toString();
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:3001/api/process?${queryString}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setProcessos(data);
    } catch (error) {
      console.error("Erro ao buscar processos:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const porStatus = (status) => {
    if (!Array.isArray(processos)) {
      return [];
    } else {
      return processos.filter(
        (p) => p.status?.toLowerCase() === status.toLowerCase()
      );
    }
  };

  const formatarData = (data) => {
    const d = new Date(data);
    return d.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  const handleDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    const movedProcess = processos.find((p) => String(p.id) === draggableId);
    if (!movedProcess) return;

    const newStatus = destination.droppableId;

    const processosBackup = [...processos];

    setProcessos((prev) =>
      prev.map((p) =>
        p.id === movedProcess.id
          ? { ...p, status: newStatus, updated_at: new Date().toISOString() }
          : p
      )
    );

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3001/api/process/${movedProcess.hash_id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar status no backend");
      }
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      alert("Erro ao atualizar status no servidor. Movimentação revertida.");
      setProcessos(processosBackup);
    }
  };

  const handleSearch = (filters) => {
    fetchData(filters);
  };

  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Image src="/justica-logo.jpg" alt="Logo" width={30} height={24} />
          <span className="text-xl font-bold text-gray-800">
            <p>Publicações</p>
          </span>
        </div>
        <div>
          <SearchFilter onSearch={handleSearch} />
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto">
          <KanbanColumn
            title="Nova Publicação"
            count={porStatus("nova").length}
            droppableId="nova"
          >
            {porStatus("nova").map((p, index) => (
              <ProcessoDialog
                key={p.id}
                processo={p}
                trigger={
                  <div className="cursor-pointer">
                    <KanbanCard
                      id={String(p.id)}
                      index={index}
                      processo={p.numero_processo}
                      data={formatarData(p.data_disponibilizacao)}
                      tempo={p.updated_at}
                    />
                  </div>
                }
              />
            ))}
          </KanbanColumn>

          <KanbanColumn
            title="Publicação Lida"
            count={porStatus("lida").length}
            droppableId="lida"
          >
            {porStatus("lida").map((p, index) => (
              <ProcessoDialog
                key={p.id}
                processo={p}
                trigger={
                  <div className="cursor-pointer">
                    <KanbanCard
                      id={String(p.id)}
                      index={index}
                      processo={p.numero_processo}
                      data={formatarData(p.data_disponibilizacao)}
                      tempo={p.updated_at}
                    />
                  </div>
                }
              />
            ))}
          </KanbanColumn>

          <KanbanColumn
            title="Enviar para Advogado Responsável"
            count={porStatus("em_analise").length}
            droppableId="em_analise"
          >
            {porStatus("em_analise").map((p, index) => (
              <ProcessoDialog
                key={p.id}
                processo={p}
                trigger={
                  <div className="cursor-pointer">
                    <KanbanCard
                      id={String(p.id)}
                      index={index}
                      processo={p.numero_processo}
                      data={formatarData(p.data_disponibilizacao)}
                      tempo={p.updated_at}
                    />
                  </div>
                }
              />
            ))}
          </KanbanColumn>

          <KanbanColumn
            title="Concluído"
            count={porStatus("processada").length}
            droppableId="processada"
          >
            {porStatus("processada").map((p, index) => (
              <ProcessoDialog
                key={p.id}
                processo={p}
                trigger={
                  <div className="cursor-pointer">
                    <KanbanCard
                      id={String(p.id)}
                      index={index}
                      processo={p.numero_processo}
                      data={formatarData(p.data_disponibilizacao)}
                      tempo={p.updated_at}
                    />
                  </div>
                }
              />
            ))}
          </KanbanColumn>
        </div>
      </DragDropContext>
    </main>
  );
}
