import { BrowserRouter } from "react-router-dom"
import { useState } from "react"
import RoutesConfig from "@/Routes/routes"
import { CartProvider } from "@/contexts/CartContext"

function App() {
  const [termoBusca, setTermoBusca] = useState("")

  return (
    <BrowserRouter>
      <CartProvider> 
        <RoutesConfig setBusca={setTermoBusca} termoBusca={termoBusca} />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App