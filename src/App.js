import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import './styles/App.css'
import Inicial from './pages/inicial';
import Footer from './components/footer';
import Lancamento from './pages/lancamento';

function App() {
  return(
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicial/>}/>
          <Route path="/lancamento" element={<Lancamento/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
    
  )
}

export default App;
