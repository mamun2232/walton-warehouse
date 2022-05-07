import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Home/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ManageItem from './Pages/Item/ManageItem/ManageItem';
import AddItem from './Pages/Item/AddItem/AddItem';
import MyItem from './Pages/Item/MyItem/MyItem';
import Login from './Pages/Login/Login/Login';
import Detials from './Pages/Home/Home/Detilas/Detials';
import { ToastContainer, toast } from 'react-toastify';
import Register from './Pages/Login/Register/Register';
import RequareAuth from './Pages/Login/RequareAuth/RequareAuth';
import Footer from './Pages/Home/Footer/Footer';
function App() {
  return (
    <div className="Apps">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manageItem' element={<RequareAuth>
          <ManageItem></ManageItem>
        </RequareAuth>}></Route>
        <Route path='/manageItem/:id' element={<RequareAuth>
          <Detials></Detials>
        </RequareAuth>}></Route>
        <Route path='/addItem' element={<RequareAuth>
          <AddItem></AddItem>
        </RequareAuth>}></Route>
        <Route path='/myItem' element={<RequareAuth>
          <MyItem></MyItem>
        </RequareAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </div>
  );
}

export default App;
