import React from 'react'
import './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/NavBar'
import MainContent from './components/MainContent';
// import UncontrolledExample from './BootstrapComponents/UncontrolledExample';


function App() {

  return(
    < >
      <Header/>
      <MainContent/>
      {/* <UncontrolledExample/> */}
    </>
  )

}
export default App