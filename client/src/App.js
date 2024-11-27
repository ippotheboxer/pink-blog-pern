import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Components
import Navbar from "./components/Navbar";

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

function App() {
  const user = true;
  return (
    <>
    <BrowserRouter>
    <Navbar  user={user}/>
      <Routes>
        <Route index element={<HomePage /> } />
        <Route path='/home' element={<HomePage /> } />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} /> 
        <Route path='/view' element={user ? <ViewBlogs /> : <Login />} />
        <Route path='/write' element={user ? <WriteBlog /> : <Login />}></Route>
        <Route path='/view/blog/:id' element={user ? <FullPageBlog /> : <Navigate to="/login"/>} />
        <Route path='/edit/blog/:id' element={user ? <EditBlog /> : <Login />}  />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
