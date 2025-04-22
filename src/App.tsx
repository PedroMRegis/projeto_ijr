import React from 'react'
import styled from "styled-components"
import {BrowserRouter} from 'react-router-dom'
import TopHeader from './utils/TopHeader'
import MiddleHeader from '@/utils/MiddleHeader'
import BottomHeader from '@/utils/BottomHeader'
import RoutesConfig from "@/Routes/routes"


function App (){
  return (
    <>
    <BrowserRouter>
    <TopHeader />
    <MiddleHeader />
    <BottomHeader />
    <RoutesConfig />
    </BrowserRouter>
    </>
  )
}

export default App