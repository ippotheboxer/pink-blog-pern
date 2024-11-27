import React from "react";
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

// Style
import "./style.css"

// Pages
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ViewBlogs from "./pages/ViewBlogs";
import WriteBlog from "./pages/WriteBlog"
import FullPageBlog from "./pages/FullPageBlog";
import Login from "./pages/Login";
import EditBlog from "./pages/EditBlog";
import Register from "./pages/Register";


const PrivateRoutes = () => {
  const {isAuth} = useSelector(state => state.auth);
  return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
}

const RestrictedRoutes = () => {
  const {isAuth} = useSelector(state => state.auth);
  return <>{!isAuth ? <Outlet /> : <Navigate to='/home' />}</>
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage /> } />
        <Route path='/home' element={<HomePage /> } />

        <Route element={<PrivateRoutes />}>
        <Route path='/view' element={<ViewBlogs />} />
        <Route path='/write' element={<WriteBlog />} />
        <Route path='/view/blog/:id' element={<FullPageBlog />} />
        <Route path='/edit/blog/:id' element={<EditBlog />}  />
        </Route> 

      <Route element={<RestrictedRoutes />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
