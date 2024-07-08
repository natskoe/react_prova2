import './styles/App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return(
    <>
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Inicial/>} /> */}
          {/* <Route path="/transacoes" element={<Transacoes/>}/> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
    
  )
}

export default App;
