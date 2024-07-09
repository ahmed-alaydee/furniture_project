
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navpar from './Components/Navpar';
import Navbarr from './Components/Nvabra2';
import { createBrowserRouter } from "react-router-dom";

const routs=createBrowserRouter([
  {
    path:'/',
    element:
    <>
    <Navpar/>
<Navbarr/>
<Home/>
<About/>
<Footer/>
    </>
  },
  {
    path:"/about",
   element:<About/>
  },
  {
path:"/home",
element:<Home/>
  },
  {
    path:"/cartproduct",
    element:
    <>
        <Navpar/>
<Navbarr/>

<Footer/>
    </>

  }
])
export default routs


