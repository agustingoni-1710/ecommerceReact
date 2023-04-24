import CartContent from './Components/CartContent/CartContent';
import DataProvider from './Components/Context/DataContext';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider> 
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<CartContent />} />
      </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
