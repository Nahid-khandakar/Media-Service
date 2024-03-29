import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import CheckOut from './component/CheckOut/CheckOut';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Footer from './component/Shared/Footer/Footer';
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
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
