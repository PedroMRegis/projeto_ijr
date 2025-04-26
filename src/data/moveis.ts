import cadeira1 from "@/assets/cadeira1.png"
import cadeira2 from "@/assets/cadeira2.png"
import mesa1 from "@/assets/mesa1.png"
import mesa2 from "@/assets/mesa2.png"
import armario1 from "@/assets/armario1.png"
import armario2 from "@/assets/armario2.png"
import { Produto } from "@/utils/FiltroProduto"

const moveis: Produto[] = [
  {
    imagem: cadeira1,
    nome: "Cadeira de Escritório Diretor Giratória",
    precoPor: "449,00",
    tipo: "cadeiras",
    descricao: "Cadeira diretor giratória com design ergonômico, ideal para conforto durante o expediente."
  },
  {
    imagem: cadeira2,
    nome: "Cadeira de Escritório Presidente Giratória",
    precoDe: "899,00",
    precoPor: "749,00",
    tipo: "cadeiras",
    descricao: "Cadeira presidente giratória com encosto alto, ajuste de altura e acabamento sofisticado."
  },
  {
    imagem: mesa1,
    nome: "Mesa Office com Gavetas",
    precoDe: "450,00",
    precoPor: "350,00",
    tipo: "mesas",
    descricao: "Mesa de escritório funcional com gavetas espaçosas, perfeita para organização no ambiente de trabalho."
  },
  {
    imagem: mesa2,
    nome: "Mesa de Escritório Pé Preto",
    precoDe: "599,00",
    precoPor: "499,00",
    tipo: "mesas",
    descricao: "Mesa robusta com estrutura preta e tampo resistente, ideal para escritórios modernos."
  },
  {
    imagem: armario1,
    nome: "Estante Alta 2 Portas Preta",
    precoDe: "499,00",
    precoPor: "449,00",
    tipo: "armários e estantes",
    descricao: "Estante alta com 2 portas, acabamento preto elegante e ótimo espaço interno para documentos."
  },
  {
    imagem: armario2,
    nome: "Armário Preto 2 Portas",
    precoDe: "399,00",
    precoPor: "229,00",
    tipo: "armários e estantes",
    descricao: "Armário compacto com 2 portas, ideal para organização de escritórios pequenos e médios."
  },
]

export default moveis
