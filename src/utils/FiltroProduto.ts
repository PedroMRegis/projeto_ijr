import { useState } from "react"

export type Produto = {
  imagem: string
  nome: string
  precoDe?: string
  precoPor: string
  tipo: string
  descricao: string
}

export function FiltroProduto(lista: Produto[]) {
  const [filtro, setFiltro] = useState("todos")

  const produtosFiltrados = filtro === "todos"
    ? lista
    : lista.filter(produto => produto.tipo === filtro)

  return { filtro, setFiltro, produtosFiltrados }
}
