'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export function SearchFilter({ onSearch }) {
  const [params, setParams] = useState('')
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')

  const handleSearch = () => {
    onSearch({
      params,
      dataInicial,
      dataFinal,
    })
  }

  return (
    <div className="flex flex-col md:flex-row items-end justify-between gap-4 p-4 rounded-md bg-muted">
      <div className="flex flex-col gap-1 w-full md:w-1/2">
        <Label>Pesquisar</Label>
        <Input
          placeholder="Digite o número do processo ou nome das partes envolvidas"
          value={params}
          onChange={(e) => setParams(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label>Data do diário</Label>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">De:</span>
            <Input
              type="date"
              value={dataInicial}
              onChange={(e) => setDataInicial(e.target.value)}
              className="w-[130px]"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">Até:</span>
            <Input
              type="date"
              value={dataFinal}
              onChange={(e) => setDataFinal(e.target.value)}
              className="w-[130px]"
            />
          </div>

          <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
            🔍
          </Button>
        </div>
      </div>
    </div>
  )
}
