import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from './Pages/Navbar';
import Home from "./Pages/Home"
import PageNotFound from "./Pages/PageNotFound"
import ViewContact from './Pages/ViewContact';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/view/:id" element={<ViewContact />}></Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
