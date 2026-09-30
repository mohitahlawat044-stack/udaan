import {Routes,Route,ScrollRestoration,useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
function Top(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0);const titles={'/':'Udaan Events | Luxury Event Experiences','/about':'About Udaan Events | The Story Behind Udaan','/services':'Services | Udaan Events','/events':'Events & Gallery | Udaan Events','/contact':'Contact Udaan Events | Plan Your Experience'};document.title=titles[pathname]||titles['/'];},[pathname]);return null}
export default function App(){return <><Top/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/events" element={<Events/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><Footer/></>}
