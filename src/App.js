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
function App() {
  return (
    <div className="Apps">
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manageItem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/manageItem/:id' element={<Detials></Detials>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
