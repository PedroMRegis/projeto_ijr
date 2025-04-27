import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import RoutesConfig from "@/Routes/routes";


function App (){
  const [termoBusca, setTermoBusca] = useState("");
  return (
    <>
    <BrowserRouter>
      <RoutesConfig setBusca={setTermoBusca} termoBusca={termoBusca} />
    </BrowserRouter>

    </>
  )
}

export default App