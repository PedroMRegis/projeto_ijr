import { useState } from "react";
import { Produto } from "./FiltroProduto";

export function FiltroInput(lista: Produto[]) {
  const [busca, setBusca] = useState("");

  const produtosBuscados = busca.trim()
    ? lista.filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
        produto.tipo.toLowerCase().includes(busca.toLowerCase())
      )
    : lista;

  return { busca, setBusca, produtosBuscados };
}
