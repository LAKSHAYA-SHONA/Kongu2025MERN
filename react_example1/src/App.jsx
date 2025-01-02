import './App.css'
import ClassCompEg from './Components/classComponents/clscompeg.jsx';
import About from './Components/functionalComponent/About.jsx';
import Contact from './Components/functionalComponent/Contact.jsx';
import Footer from './Components/functionalComponent/footer.jsx';
import Gallery from './Components/functionalComponent/Gallery.jsx';
import HomePage from './Components/functionalComponent/Home.jsx';
import NavBar from './Components/functionalComponent/NavBar.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseEffect from './Components/functionalComponent/useEffect.jsx';
import UseRef from './Components/functionalComponent/useref.jsx';
import UseContext from './Components/functionalComponent/useContext.jsx';
import UseMemo from './Components/functionalComponent/UseMemo.jsx';

function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar/>

        <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/about" element = {<About college = "KEC" clg1 = "KCAS" clg2="KNC"/>} />
            <Route path="/gallery" element = {<Gallery/>} />
            <Route path="/useeffect" element = {<UseEffect/>} />
            <Route path="/useref" element = {<UseRef/>} />
            <Route path="/usecontext" element = {<UseContext/>} />
            <Route path="/usememo" element = {<UseMemo/>} />
            <Route path="/contact" element = {<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
