import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from './Pages/Navbar';
import Home from "./Pages/Home"
import PageNotFound from "./Pages/PageNotFound"
import ViewContact from './Pages/ViewContact';
import Footer from './Pages/Footer';

// const Navbar = lazy(() => import('./Pages/Navbar'))
// const Home = lazy(() => import('./Pages/Home'))
// const PageNotFound = lazy(() => import('./Pages/PageNotFound'))
// const ViewContact = lazy(() => import('./Pages/ViewContact'))
// const Footer = lazy(() => import('./Pages/Footer'))

const App = () => {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Navbar />
            <Routes>
              <Route exact path='/vite-redux-json/' element={<Home />} />
              <Route exact path="/:id" element={<ViewContact />}></Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
        {/* </Suspense> */}
      <Footer />
    </div>
  )
}

export default App
