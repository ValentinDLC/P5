import React from 'react'
import Banner from "./Layout/Banner/Banner.jsx"
import Cards from "./components/Cards/Cards"
import "./App.scss";
import Main from "./Layout/Main/Main.jsx"


function App() {
  return (
    <>
    <Main>
      <Banner />
      <Cards />
      </Main>
    </>
  )
}

export default App
