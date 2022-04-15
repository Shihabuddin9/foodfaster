import logo from './logo.svg';
import './App.css';
import Header from './component/fixedPart/Header/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
