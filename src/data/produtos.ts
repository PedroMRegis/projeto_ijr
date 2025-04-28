import { Produto } from "@/utils/FiltroProduto";
import mouse from "@/assets/mouse.png";
import telefone from "@/assets/telefone_fixo.png";
import monitor from "@/assets/monitor_lg.png";
import teclado from "@/assets/teclado.png";
import impressora from "@/assets/impressora_laser.png";
import desktop from "@/assets/Desktop.png";
import cadeira1 from "@/assets/cadeira1.png";
import cadeira2 from "@/assets/cadeira2.png";
import mesa1 from "@/assets/mesa1.png";
import mesa2 from "@/assets/mesa2.png";
import armario1 from "@/assets/armario1.png";
import armario2 from "@/assets/armario2.png";
import papelChamex from "@/assets/papel_chamex.png";
import blocoNotas from "@/assets/bloconotas.png";
import kitEscrita from "@/assets/kitescrita.png";
import grampeador from "@/assets/grampeador.png";
import organizador from "@/assets/organizador.png";
import bandeja from "@/assets/bandeja.png";

const produtos: Produto[] = [
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
  },
  {
    id: 7,
    imagem: cadeira1,
    nome: "Cadeira de Escritório Diretor Giratória",
    precoPor: 449.00,
    tipo: "cadeiras",
    descricao: "Cadeira diretor giratória com design ergonômico, ideal para conforto durante o expediente."
  },
  {
    id: 8,
    imagem: cadeira2,
    nome: "Cadeira de Escritório Presidente Giratória",
    precoDe: 899.00,
    precoPor: 749.00,
    tipo: "cadeiras",
    descricao: "Cadeira presidente giratória com encosto alto, ajuste de altura e acabamento sofisticado."
  },
  {
    id: 9,
    imagem: mesa1,
    nome: "Mesa Office com Gavetas",
    precoDe: 450.00,
    precoPor: 350.00,
    tipo: "mesas",
    descricao: "Mesa de escritório funcional com gavetas espaçosas, perfeita para organização no ambiente de trabalho."
  },
  {
    id: 10,
    imagem: mesa2,
    nome: "Mesa de Escritório Pé Preto",
    precoDe: 599.00,
    precoPor: 499.00,
    tipo: "mesas",
    descricao: "Mesa robusta com estrutura preta e tampo resistente, ideal para escritórios modernos."
  },
  {
    id: 11,
    imagem: armario1,
    nome: "Estante Alta 2 Portas Preta",
    precoDe: 499.00,
    precoPor: 449.00,
    tipo: "armários e estantes",
    descricao: "Estante alta com 2 portas, acabamento preto elegante e ótimo espaço interno para documentos."
  },
  {
    id: 12,
    imagem: armario2,
    nome: "Armário Preto 2 Portas",
    precoDe: 399.00,
    precoPor: 229.00,
    tipo: "armários e estantes",
    descricao: "Armário compacto com 2 portas, ideal para organização de escritórios pequenos e médios."
  },
  {
    id: 13,
    imagem: blocoNotas,
    nome: "Bloco de anotações 7x10",
    precoDe: 5.00,
    precoPor: 47.69,
    tipo: "papel e blocos",
    descricao: "Bloco de anotações compacto 7x10 cm, perfeito para recados rápidos e anotações diárias."
  },
  {
    id: 14,
    imagem: papelChamex,
    nome: "Papel Sulfite A4 75g Chamex",
    precoDe: 225.00,
    precoPor: 179.90,
    tipo: "papel e blocos",
    descricao: "Papel sulfite A4 Chamex de alta qualidade, ideal para impressões e cópias com ótimo acabamento."
  },
  {
    id: 15,
    imagem: kitEscrita,
    nome: "Kit Office Essencial",
    precoPor: 19.00,
    tipo: "materiais de mesa",
    descricao: "Kit de escrita com canetas, lápis e borracha. Essencial para escritórios e uso diário."
  },
  {
    id: 16,
    imagem: grampeador,
    nome: "Grampeador 26/6",
    precoDe: 45.00,
    precoPor: 29.99,
    tipo: "materiais de mesa",
    descricao: "Grampeador compacto e resistente, compatível com grampos padrão 26/6, ideal para escritório."
  },
  {
    id: 17,
    imagem: organizador,
    nome: "Organizador Escritório",
    precoPor: 29.00,
    tipo: "outros",
    descricao: "Organizador multiuso para mesa de escritório, mantendo seus materiais organizados e acessíveis."
  },
  {
    id: 18,
    imagem: bandeja,
    nome: "Organizador de Bandeja Dupla",
    precoDe: 90.00,
    precoPor: 76.00,
    tipo: "outros",
    descricao: "Organizador de bandeja dupla para documentos, com estrutura resistente e design elegante."
  }
];

export default produtos;