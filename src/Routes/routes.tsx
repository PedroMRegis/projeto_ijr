import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Orcamento from "@/pages/Orcamento"
import Suprimentos from "@/pages/Suprimentos"
import Moveis from "@/pages/Moveis"
import Eletronicos from "@/pages/Eletronicos"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orcamento" element={<Orcamento />} />
      <Route path="/suprimentos" element={<Suprimentos />} />
      <Route path="/moveis" element={<Moveis />} />
      <Route path="/eletronicos" element={<Eletronicos />} />
    </Routes>
  )
}

export default AppRoutes
