"use client"

import React from "react"
import { Card } from "./ui/card"
import { Droppable } from "@hello-pangea/dnd"

export function KanbanColumn({
  title,
  count,
  children,
  droppableId,
  onScroll,
}) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-[300px] p-4 space-y-2 min-h-[60vh] overflow-y-auto"
          onScroll={onScroll}
        >
          <div className="flex justify-between items-center font-medium">
            <span>{title}</span>
            <span className="text-sm text-muted-foreground">{count}</span>
          </div>
          <div className="space-y-2">
            {children}
            {provided.placeholder}
          </div>
        </Card>
      )}
    </Droppable>
  )
}
