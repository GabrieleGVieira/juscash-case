import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Draggable } from "@hello-pangea/dnd";

export function KanbanCard({ id, index, processo, tempo, data }) {
  const calcularTempoDecorrido = (updatedAt) => {
    const atualizado = new Date(updatedAt);
    const agora = new Date();
    const diffMs = agora - atualizado;

    const segundos = Math.floor(diffMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    if (dias > 0) return `${dias}d`;
    if (horas > 0) return `${horas}h`;
    if (minutos > 0) return `${minutos}min`;
    return `${segundos}s`;
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-2 shadow-md"
        >
          <p className="text-sm font-medium">{processo}</p>
          <div className="flex items-center justify-between mt-2 text-gray-500 text-xs">
            <div className="flex items-center gap-1">
              <Clock size={12} />
              {calcularTempoDecorrido(tempo)}
            </div>
            <span>{data}</span>
          </div>
        </Card>
      )}
    </Draggable>
  );
}
