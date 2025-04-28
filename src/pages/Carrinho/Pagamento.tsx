import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import EtapasCarrinho from "@/components/EtapasCarrinho"
import MiddleHeaderLogin from "@/components/MiddleHeaderLogin"
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer"
import { useCart } from "@/contexts/CartContext"

const Pagamento = () => {
  const [formaPagamento, setFormaPagamento] = useState("")
  const [numeroCartao, setNumeroCartao] = useState("")
  const [nomeTitular, setNomeTitular] = useState("")
  const [validade, setValidade] = useState("")
  const [cvv, setCvv] = useState("")

  const { carrinho } = useCart()

  const totalProdutos = carrinho.reduce((soma, item) => soma + (item.precoPor * item.quantidade), 0)
  const frete = 25.00
  const totalGeral = totalProdutos + frete

  const podeFinalizarCompra = () => {
    if (formaPagamento === "cartao") {
      return (
        numeroCartao.trim() !== "" &&
        nomeTitular.trim() !== "" &&
        validade.trim() !== "" &&
        cvv.trim() !== ""
      )
    }
    if (formaPagamento === "pix" || formaPagamento === "applepay") {
      return true
    }
    return false
  }

  return (
    <>
      <TopHeader />
      <MiddleHeaderLogin />
      <Container>
        <EtapasCarrinho etapaAtual={4} />

        <Conteudo>
          <FormularioPagamento>
            <Titulo>Escolha a forma de pagamento</Titulo>

            <Opcoes>
              <Opcao>
                <input
                  type="radio"
                  id="cartao"
                  name="pagamento"
                  checked={formaPagamento === "cartao"}
                  onChange={() => setFormaPagamento("cartao")}
                />
                <label htmlFor="cartao">Cartão de Crédito</label>
              </Opcao>
              <Opcao>
                <input
                  type="radio"
                  id="pix"
                  name="pagamento"
                  checked={formaPagamento === "pix"}
                  onChange={() => setFormaPagamento("pix")}
                />
                <label htmlFor="pix">Pix</label>
              </Opcao>
              <Opcao>
                <input
                  type="radio"
                  id="applepay"
                  name="pagamento"
                  checked={formaPagamento === "applepay"}
                  onChange={() => setFormaPagamento("applepay")}
                />
                <label htmlFor="applepay">Apple Pay</label>
              </Opcao>
            </Opcoes>

            {formaPagamento === "cartao" && (
              <CamposCartao>
                <Input
                  type="text"
                  placeholder="Número do cartão"
                  value={numeroCartao}
                  onChange={(e) => setNumeroCartao(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Nome do titular"
                  value={nomeTitular}
                  onChange={(e) => setNomeTitular(e.target.value)}
                />
                <LinhaDuasColunas>
                  <Input
                    type="text"
                    placeholder="Validade (MM/AA)"
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </LinhaDuasColunas>
              </CamposCartao>
            )}

            {formaPagamento === "pix" && (
              <PixArea>
                <MensagemPix>Pix gerado! Aguarde a confirmação do pagamento.</MensagemPix>
              </PixArea>
            )}

            {formaPagamento === "applepay" && (
              <ApplePayArea>
                <p>Você será redirecionado para finalizar via Apple Pay.</p>
              </ApplePayArea>
            )}

            <BotaoFinalizar
              to={podeFinalizarCompra() ? "/pedido-acompanhamento" : "#"}
              $desabilitado={!podeFinalizarCompra()}
              onClick={(e) => {
                if (!podeFinalizarCompra()) {
                  e.preventDefault()
                }
              }}
            >
              FINALIZAR COMPRA
            </BotaoFinalizar>
          </FormularioPagamento>

          <ResumoCompra>
            <TituloResumo>Resumo da compra</TituloResumo>
            <LinhaResumo>
              <span>Produtos:</span>
              <span>R$ {totalProdutos.toFixed(2)}</span>
            </LinhaResumo>
            <LinhaResumo>
              <span>Frete:</span>
              <span>R$ {frete.toFixed(2)}</span>
            </LinhaResumo>

            <LinhaSeparadora />
            <LinhaResumo negrito>
              <span>Total:</span>
              <span>R$ {totalGeral.toFixed(2)}</span>
            </LinhaResumo>
          </ResumoCompra>
        </Conteudo>
      </Container>

      <Footer />
    </>
  )
}

export default Pagamento

const Container = styled.section`
  padding: 2rem;
  background-color: #f7f7f7;
  min-height: calc(100vh - 150px);
`

const Conteudo = styled.div`
  background: #fff;
  display: flex;
  gap: 3rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  flex-wrap: wrap;
  justify-content: center;
`

const FormularioPagamento = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Titulo = styled.h2`
  color: #023e8a;
  margin-bottom: 1rem;
  text-align: center;
`

const Opcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Opcao = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`

const CamposCartao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`

const LinhaDuasColunas = styled.div`
  display: flex;
  gap: 1rem;
`

const PixArea = styled.div`
  background: #f2f2f2;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
`

const MensagemPix = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`

const ApplePayArea = styled.div`
  background: #f2f2f2;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  width: 100%;
`

const BotaoFinalizar = styled(Link)<{ $desabilitado?: boolean }>`
  margin-top: 2rem;
  background-color: ${({ $desabilitado }) => ($desabilitado ? "#ccc" : "#023e8a")};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  pointer-events: ${({ $desabilitado }) => ($desabilitado ? "none" : "auto")};

  &:hover {
    opacity: ${({ $desabilitado }) => ($desabilitado ? "1" : "0.9")};
  }
`

const ResumoCompra = styled.div`
  flex: 1;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const TituloResumo = styled.h3`
  color: #023e8a;
  text-align: center;
  margin-bottom: 1.5rem;
`

const LinhaResumo = styled.div<{ negrito?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: ${({ negrito }) => (negrito ? "bold" : "normal")};
  font-size: ${({ negrito }) => (negrito ? "1.1rem" : "1rem")};
`

const LinhaSeparadora = styled.hr`
  margin: 1rem 0;
  border: none;
  height: 1px;
  background-color: #ccc;
`