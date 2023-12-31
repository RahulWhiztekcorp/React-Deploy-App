import React from 'react'
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import NavBar  from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Admin from './components/Admin';
import Forget from './components/Forget';
import Todo from './components/Todo';
import Products from './components/Products';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <div className="m-2">
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/read" element={<Read />}/>
            <Route path="/update" element={<Update />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/forget" element={<Forget />}/>
            <Route path="/todo" element={<Todo />}/>
            <Route path='/products' element={<Products/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
