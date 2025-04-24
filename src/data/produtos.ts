import mouse from "@/assets/mouse.png"
import telefone from "@/assets/telefone_fixo.png"
import monitor from "@/assets/monitor_lg.png"
import teclado from "@/assets/teclado.png"
import impressora from "@/assets/impressora_laser.png"
import desktop from "@/assets/Desktop.png"
import { Produto } from "@/utils/FiltroProduto"

const produtos: Produto[] = [
  {
    imagem: mouse,
    nome: "Mouse HP USB",
    precoDe: "89,00",
    precoPor: "36,99",
    tipo: "moveis",
  },
  {
    imagem: telefone,
    nome: "Telefone IP Yealink T30",
    precoDe: "299,00",
    precoPor: "253,90",
    tipo: "moveis",
  },
  {
    imagem: monitor,
    nome: "Monitor LG 22",
    precoDe: "899,00",
    precoPor: "759,00",
    tipo: "eletronicos",
  },
  {
    imagem: teclado,
    nome: "Teclado Logitech USB",
    precoDe: "129,00",
    precoPor: "89,90",
    tipo: "eletronicos",
  },
  {
    imagem: impressora,
    nome: "Impressora HP Laser",
    precoDe: "999,00",
    precoPor: "830,00",
    tipo: "suprimentos",
  },
  {
    imagem: desktop,
    nome: "Computador Desktop",
    precoDe: "899,00",
    precoPor: "799,00",
    tipo: "suprimentos",
  },
]

export default produtos
