"use client"
import { useEffect, useState } from "react"
import { DragDropContext } from "@hello-pangea/dnd"
import { KanbanCard } from "../components/KanbanCard"
import { KanbanColumn } from "../components/KanbanColumn"
import { ProcessoDialog } from "@/components/ProcessoDialog"

export default function Home() {
  const [processos, setProcessos] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/api/process")
        const data = await res.json()
        setProcessos(data)
      } catch (error) {
        console.error("Erro ao buscar processos:", error)
      }
    }
    fetchData()
  }, [])

  const porStatus = (status) =>
    processos.filter((p) => p.status?.toLowerCase() === status.toLowerCase())

  const formatarData = (data) => {
    const d = new Date(data)
    return d.toLocaleDateString("pt-BR")
  }

const handleDragEnd = async (result) => {
  const { source, destination, draggableId } = result

  if (!destination) return
  if (destination.droppableId === source.droppableId) return

  const movedProcess = processos.find(p => String(p.id) === draggableId)
  if (!movedProcess) return

  const newStatus = destination.droppableId

  // Backup do estado atual para possível rollback
  const processosBackup = [...processos]

  // Atualização otimista: atualiza localmente antes de chamar API
  setProcessos(prev =>
    prev.map(p =>
      p.id === movedProcess.id ? { ...p, status: newStatus, updated_at: new Date().toISOString() } : p
    )
  )

  try {
    const response = await fetch(`http://localhost:3001/api/process/${movedProcess.hash_id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newStatus }),
    })

    if (!response.ok) {
      throw new Error("Erro ao atualizar status no backend")
    }
  } catch (error) {
    console.error("Erro ao atualizar status:", error)
    alert("Erro ao atualizar status no servidor. Movimentação revertida.")
    setProcessos(processosBackup)
  }
}

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📜 Publicações</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto">
          <KanbanColumn
            title="Nova Publicação"
            count={porStatus("nova").length}
            droppableId="nova"
          >
            {porStatus("nova").map((p, index) => (
                <ProcessoDialog key={p.id} processo={p} trigger={
                  <div className="cursor-pointer">
                  <KanbanCard
                    id={String(p.id)}
                    index={index}
                    processo={p.numero_processo}
                    data={formatarData(p.data_disponibilizacao)}
                    tempo={p.updated_at}
                  />
                  </div>
                } />
              ))}
          </KanbanColumn>

          <KanbanColumn
            title="Publicação Lida"
            count={porStatus("lida").length}
            droppableId="lida"
          >
            {porStatus("lida").map((p, index) => (
              <ProcessoDialog key={p.id} processo={p} trigger={
                  <div className="cursor-pointer">
                  <KanbanCard
                    id={String(p.id)}
                    index={index}
                    processo={p.numero_processo}
                    data={formatarData(p.data_disponibilizacao)}
                    tempo={p.updated_at}
                  />
                  </div>
                } />
            ))}
          </KanbanColumn>

          <KanbanColumn
            title="Enviar para Advogado Responsável"
            count={porStatus("em_analise").length}
            droppableId="em_analise"
          >
            {porStatus("em_analise").map((p, index) => (
                <ProcessoDialog key={p.id} processo={p} trigger={
                  <div className="cursor-pointer">
                  <KanbanCard
                    id={String(p.id)}
                    index={index}
                    processo={p.numero_processo}
                    data={formatarData(p.data_disponibilizacao)}
                    tempo={p.updated_at}
                  />
                  </div>
                } />
            ))}
          </KanbanColumn>

          <KanbanColumn
            title="Concluído"
            count={porStatus("processada").length}
            droppableId="processada"
          >
            {porStatus("processada").map((p, index) => (
                <ProcessoDialog key={p.id} processo={p} trigger={
                  <div className="cursor-pointer">
                  <KanbanCard
                    id={String(p.id)}
                    index={index}
                    processo={p.numero_processo}
                    data={formatarData(p.data_disponibilizacao)}
                    tempo={p.updated_at}
                  />
                  </div>
                } />
            ))}
          </KanbanColumn>
        </div>
      </DragDropContext>
    </main>
  )
}
