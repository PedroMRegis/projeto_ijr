import { useState } from "react"

export type Produto = {
  id: number      
  imagem: string
  nome: string
  precoDe?: number   
  precoPor: number
  tipo: string
  descricao: string
  quantidade?: number;  
};

export function FiltroProduto(lista: Produto[]) {
  const [filtro, setFiltro] = useState("todos")

  const produtosFiltrados = filtro === "todos"
    ? lista
    : lista.filter(produto => produto.tipo === filtro)

  return { filtro, setFiltro, produtosFiltrados }
}