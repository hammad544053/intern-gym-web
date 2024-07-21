import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
// import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
