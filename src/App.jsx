
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Blogs from "./Pages/Blogs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import FooterComp from "./Components/FooterComp";
import PrivateRoute from "./Components/PrivateRoute";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute";
import CreatePost from "./Pages/CreatePost";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route />
        <Route element= {<OnlyAdminPrivateRoute />} >
        <Route path ='/create-post' element = {<CreatePost />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     <FooterComp />
    </BrowserRouter>
  );
};

export default App;
