import papelChamex from "@/assets/papel_chamex.png"
import blocoNotas from "@/assets/bloconotas.png"
import kitEscrita from "@/assets/kitescrita.png"
import grampeador from "@/assets/grampeador.png"
import organizador from "@/assets/organizador.png"
import bandeja from "@/assets/bandeja.png"
import { Produto } from "@/utils/FiltroProduto"

const suprimentos: Produto[] = [
  {
    imagem: blocoNotas,
    nome: "Bloco de anotações 7x10",
    precoDe: "5,00",
    precoPor: "47,69",
    tipo: "papel e blocos",
    descricao: "Bloco de anotações compacto 7x10 cm, perfeito para recados rápidos e anotações diárias."
  },
  {
    imagem: papelChamex,
    nome: "Papel Sulfite A4 75g Chamex",
    precoDe: "225,00",
    precoPor: "179,90",
    tipo: "papel e blocos",
    descricao: "Papel sulfite A4 Chamex de alta qualidade, ideal para impressões e cópias com ótimo acabamento."
  },
  {
    imagem: kitEscrita,
    nome: "Kit Office Essencial",
    precoPor: "19,00",
    tipo: "materiais de mesa",
    descricao: "Kit de escrita com canetas, lápis e borracha. Essencial para escritórios e uso diário."
  },
  {
    imagem: grampeador,
    nome: "Grampeador 26/6",
    precoDe: "45,00",
    precoPor: "29,99",
    tipo: "materiais de mesa",
    descricao: "Grampeador compacto e resistente, compatível com grampos padrão 26/6, ideal para escritório."
  },
  {
    imagem: organizador,
    nome: "Organizador Escritório",
    precoPor: "29,00",
    tipo: "outros",
    descricao: "Organizador multiuso para mesa de escritório, mantendo seus materiais organizados e acessíveis."
  },
  {
    imagem: bandeja,
    nome: "Organizador de Bandeja Dupla",
    precoDe: "90,00",
    precoPor: "76,00",
    tipo: "outros",
    descricao: "Organizador de bandeja dupla para documentos, com estrutura resistente e design elegante."
  },
]

export default suprimentos