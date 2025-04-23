import React from 'react'
import styled from "styled-components"
import {BrowserRouter} from 'react-router-dom'
import TopHeader from './components/TopHeader'
import MiddleHeader from '@/components/MiddleHeader'
import BottomHeader from '@/components/BottomHeader'
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