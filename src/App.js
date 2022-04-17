import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Login from './component/Login/Login';


import Header from './component/Shared/Header/Header';


function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>



    </div>
  );
}

export default App;
