import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainCompo from './Component/MainCompo';
import Kid from './Component/NavBarCompo/Kid';
import Sale from './Component/NavBarCompo/Sale';
import New from './Component/NavBarCompo/New';
import Women from './Component/NavBarCompo/Women';
import Men from './Component/NavBarCompo/Men';
import Cart from './Component/Cart';
import LoginPage from './Component/LoginPage';
import Jacktes from './Component/TrendingItemCompo/Jacktes';
import Shoes from './Component/TrendingItemCompo/Shoes';
import Watch from './Component/TrendingItemCompo/Watch';
import Hat from './Component/TrendingItemCompo/Hat';
import LeatherBag from './Component/TrendingItemCompo/LeatherBag';
import Sunglasses from './Component/TrendingItemCompo/Sunglasses';
import Jeans from './Component/TrendingItemCompo/Jeans';
import Tshirt from './Component/TrendingItemCompo/Tshirts';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainCompo />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/new' element={<New />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kid />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/jackets' element={<Jacktes />} />
        <Route path='/shoes' element={<Shoes/>} />
        <Route path='/watch' element={<Watch/>} />
        <Route path='/hat' element={<Hat/>} />
        <Route path='/leather-bag' element={<LeatherBag/>} />
        <Route path='/sunglasses' element={<Sunglasses/>} />
        <Route path='/jeans' element={<Jeans/>} />
        <Route path='/tshirt' element={<Tshirt/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
