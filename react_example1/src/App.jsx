import './App.css'
import ClassCompEg from './Components/classComponents/clscompeg.jsx';
import About from './Components/functionalComponent/About.jsx';
import Contact from './Components/functionalComponent/Contact.jsx';
import Footer from './Components/functionalComponent/footer.jsx';
import Gallery from './Components/functionalComponent/Gallery.jsx';
import HomePage from './Components/functionalComponent/Home.jsx';
import NavBar from './Components/functionalComponent/NavBar.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar/>

        <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/about" element = {<About college = "KEC" clg1 = "KCAS" clg2="KNC"/>} />
            <Route path="/contact" element = {<Contact/>} />
            <Route path="/gallery" element = {<Gallery/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
