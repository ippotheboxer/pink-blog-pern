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
import SpecificBlog from "./components/SpecificBlog";

function App() {
  const user = true;
  return (
    <>
    <BrowserRouter>
    <Navbar  user={user}/>
      <Routes>
        <Route index element={<HomePage /> } />
        <Route path='/home' element={<HomePage /> } />
        {/* <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} /> */}
        <Route path='/view' element={<ViewBlogs /> } />
        <Route path='/write' element={<WriteBlog />}></Route>
        <Route path='/blog' element={<FullPageBlog />}></Route>
        <Route path="/blog/:id" element={user ? <SpecificBlog /> : <Navigate to="/login"/>} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
