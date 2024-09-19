import React from 'react'
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Cards from "./components/Cards/Cards"
import "./App.css";
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    <div>
      <Header />
      <Main>
      <Banner />
      <Cards />
      </Main>
      <Footer />
      
    </div>
  )
}

export default App
