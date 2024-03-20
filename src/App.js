// App.jsx

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Dashboard from './components/pages/Dashboard/Dashboard.jsx';
import Login from './components/pages/Login/Login.jsx';
import Orders from './components/pages/Orders/Orders.jsx';
import Questions from './components/pages/Questions/Questions.jsx';
import Cart from './components/pages/Cart/Cart.jsx';
import Registration from './components/pages/Registration/Registration.jsx';
import Header from './components/pages/Header/Header.jsx'; 
import Footer from './components/pages/Footer/Footer.jsx'; 
import Profile from './components/pages/Header/profile.jsx';
import Classes from './components/pages/Header/classes.jsx'; 
import { CartProvider } from './components/pages/Cart/CartContext'; 
import {ProfileContextProvider} from './components/pages/Header/profilecontext.jsx';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar>{children}</Sidebar>
      <Footer />
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <CartProvider>
      <ProfileContextProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/classes" element={<Classes />} /> 
          </Routes>
        </AppLayout>
        </BrowserRouter>
        </ProfileContextProvider>
    </CartProvider>
  );
};

export default App;
