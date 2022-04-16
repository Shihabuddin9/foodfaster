import logo from './logo.svg';
import './App.css';
import Header from './component/fixedPart/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import SearchArea from './component/fixedPart/SerachArea/SearchArea';
import Breakfasts from './component/Breakfasts/Breakfasts';
import Lunchs from './component/Lunchs/Lunchs';
import Dinners from './component/Dinners/Dinners';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/fixedPart/Footer/Footer';


function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<SearchArea></SearchArea>}>
          <Route path='/' element={<Navbar></Navbar>}>
            <Route path='/' element={<Breakfasts></Breakfasts>}></Route>
            <Route path='/lunchs' element={<Lunchs></Lunchs>}></Route>
            <Route path='/dinners' element={<Dinners></Dinners>}></Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
