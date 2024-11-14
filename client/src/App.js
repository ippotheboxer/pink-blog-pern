import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';

import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ViewBlogs from "./pages/ViewBlogs";
import WriteBlog from "./pages/WriteBlog"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<HomePage /> } />
        <Route path='/home' element={<HomePage /> } />
        <Route path='/view' element={<ViewBlogs /> } />
        <Route path='/write' element={<WriteBlog />}></Route>
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
