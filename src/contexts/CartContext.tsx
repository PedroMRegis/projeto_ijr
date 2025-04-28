import { createContext, useContext, useState, useEffect } from "react"
import { Produto } from "@/utils/FiltroProduto"

export type ProdutoCarrinho = Produto & {
  quantidade: number
}

type CartContextType = {
  carrinho: ProdutoCarrinho[];
  adicionarAoCarrinho: (produto: Produto, quantidade: number) => void;
  removerDoCarrinho: (produtoId: number) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>(() => {
    const dadosSalvos = localStorage.getItem("carrinho")
    return dadosSalvos ? JSON.parse(dadosSalvos) : []
  })

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho])

  const adicionarAoCarrinho = (produto: Produto, quantidade: number) => {
    setCarrinho((prev) => {
      const existe = prev.find((item) => item.id === produto.id)

      if (existe) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        )
      } else {
        return [...prev, { ...produto, quantidade }];
      }
    })
  }

  const removerDoCarrinho = (produtoId: number) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== produtoId))
  }

  return (
    <CartContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
