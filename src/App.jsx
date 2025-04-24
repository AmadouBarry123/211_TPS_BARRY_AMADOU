import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MemeGenerator"

export default function App() {
  const [name, setName] = React.useState("")


  return (
      <>
        <Header/>
        <MainContent/>
      </>
  )
}

