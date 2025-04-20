import React from 'react'
import styled from "styled-components"
import {BrowserRouter} from 'react-router-dom'
import TopHeader from './utils/TopHeader'
import MiddleHeader from './utils/MiddleHeader'
import BottomHeader from './utils/BottomHeader'


function App (){
  return (
    <>
    <BrowserRouter>
    <TopHeader />
    <MiddleHeader />
    <BottomHeader />
    </BrowserRouter>
    </>
  )
}

export default App