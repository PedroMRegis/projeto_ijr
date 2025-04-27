import styled from "styled-components"

const PedidoAcompanhamento = () => {
  return (
    <Container>
      <Titulo>Acompanhe seu pedido</Titulo>
      <Subtitulo>Histórico em tempo real</Subtitulo>

      <LinhaDoTempo>
        <Coluna>
          <Item>
            <Bolinha ativa />
            <TextoEtapa>Pagamento em análise</TextoEtapa>
          </Item>

          <LinhaLigacao />

          <Item>
            <Bolinha ativa />
            <TextoEtapa>Pagamento confirmado</TextoEtapa>
          </Item>

          <LinhaLigacao />

          <Item>
            <Bolinha ativa />
            <TextoEtapa>Preparando o pedido</TextoEtapa>
          </Item>

          <LinhaLigacao />

          <Item>
            <Bolinha />
            <TextoEtapa>Pedido à caminho</TextoEtapa>
          </Item>

          <LinhaLigacao />

          <Item>
            <Bolinha />
            <TextoEtapa>Chegou ao destino</TextoEtapa>
          </Item>
        </Coluna>
      </LinhaDoTempo>
    </Container>
  )
}

export default PedidoAcompanhamento

const Container = styled.section`
  background-color: #f7f7f7;
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`

const Titulo = styled.h2`
  font-size: 2.2rem;
  color: #023e8a;
  margin-bottom: 0.5rem;
`

const Subtitulo = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
`

const LinhaDoTempo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 500px;
  position: relative;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2; 
`

const Bolinha = styled.div<{ ativa?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ ativa }) => (ativa ? "#023e8a" : "#ccc")};
  flex-shrink: 0;
`

const TextoEtapa = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
`

const LinhaLigacao = styled.div`
  width: 2px;
  height: 40px;
  background-color: #ccc;
  margin-left: 9px; 
`