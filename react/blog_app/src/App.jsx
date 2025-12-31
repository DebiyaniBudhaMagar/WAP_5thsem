import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Section from './Components/Section'
import Footer from './Components/Footer'
import {BrowserRouter} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Nav/>
      <Section/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
