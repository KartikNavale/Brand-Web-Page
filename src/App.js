// import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.css';

   



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
