import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Faq from './Faq';
import Profile from './profile';
import Collection from './Collection';
import DashboardLayout from './DashboardLayout';
import AdminCategories from '../admin/AdminCategories';
import AdminProducts from '../admin/AdminProducts';
import AdminOrders from '../admin/AdminOrders';
import AdminUsers from '../admin/AdminUsers';
import Settings from './Setting';
import ViewProfile from './ViewProfile';
import Dashboard from './Dashboard';
import CollectionDetail from '../pages/CollectionDetail';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import Checkout from '../pages/Checkout';
import ContactUs from '../pages/ContactUs';
import OrderSuccess from '../pages/OrderSuccess';


function Routing() {
const location = useLocation();

const isAdminRoute = location.pathname.startsWith('/dashboard');

  return (

      <>
       {!isAdminRoute && <Navbar/>}
  {/* <div className="pt-[80px]"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
       <Route path="/faqs" element={<Faq />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/collection" element={<Collection />} />
       <Route path="/collection/:id" element={<CollectionDetail />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/wishlist" element={<Wishlist />} />
       <Route path="/checkout" element={<Checkout />} />
       <Route path="/contact" element={<ContactUs />} />
       <Route path="/order-success" element={<OrderSuccess />} />


      
          
          <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="admin-products" element={<AdminProducts />} />
          <Route path="admin-categories" element={<AdminCategories />} />
          <Route path="admin-orders" element={<AdminOrders />} />
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="admin-setting" element={<Settings/>} />
          <Route path="admin-profile" element={<ViewProfile />} />
        </Route>



        </Routes>
     {/* </div> */}
     {!isAdminRoute && <Footer/>}
   </>
  )
}

export default Routing
