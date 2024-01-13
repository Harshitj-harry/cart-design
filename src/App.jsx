import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About'
import Store from './pages/Store'
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './components/ShoppingCartContext';


const App = () => {
  return (
    <>
    <ShoppingCartProvider>
    <Router>
    <Navbar/>
    <Container className='mb-4'>
        
            <Routes>
                <Route path='/' element={<Store/>}/>
                <Route path='/about' element={<About/>}/>
                
            </Routes>
        
    </Container>
    </Router>
    </ShoppingCartProvider>
    </>
  )
}

export default App