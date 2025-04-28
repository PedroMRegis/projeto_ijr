import mouse from "@/assets/mouse.png"
import telefone from "@/assets/telefone_fixo.png"
import monitor from "@/assets/monitor_lg.png"
import teclado from "@/assets/teclado.png"
import impressora from "@/assets/impressora_laser.png"
import desktop from "@/assets/Desktop.png"
import { Produto } from "@/utils/FiltroProduto"

const eletronicos: Produto[] = [
  {
    id: 1,
    imagem: mouse,
    nome: "Mouse HP USB",
    precoDe: 89.00,
    precoPor: 36.99,
    tipo: "mouses",
    descricao: "Mouse HP USB de alta precisão e design ergonômico, perfeito para uso diário."
  },
  {
    id: 2,
    imagem: telefone,
    nome: "Telefone IP Yealink T30",
    precoDe: 299.00,
    precoPor: 253.90,
    tipo: "essenciais escritorio",
    descricao: "Telefone IP profissional com excelente qualidade de áudio e recursos avançados para escritórios."
  },
  {
    id: 3,
    imagem: monitor,
    nome: "Monitor LG 22\"",
    precoDe: 899.00,
    precoPor: 759.00,
    tipo: "monitores",
    descricao: "Monitor LG de 22 polegadas com resolução Full HD para imagens claras e detalhadas."
  },
  {
    id: 4,
    imagem: teclado,
    nome: "Teclado Logitech USB",
    precoDe: 129.00,
    precoPor: 89.90,
    tipo: "teclados",
    descricao: "Teclado Logitech USB confortável, silencioso e ideal para aumentar a produtividade."
  },
  {
    id: 5,
    imagem: impressora,
    nome: "Impressora HP Laser",
    precoDe: 999.00,
    precoPor: 830.00,
    tipo: "essenciais escritorio",
    descricao: "Impressora HP Laser eficiente e econômica, indicada para demandas de alta produtividade."
  },
  {
    id: 6,
    imagem: desktop,
    nome: "Computador Desktop",
    precoDe: 899.00,
    precoPor: 799.00,
    tipo: "desktop",
    descricao: "Computador Desktop robusto, perfeito para ambientes corporativos e multitarefas."
  }
]

export default eletronicos
