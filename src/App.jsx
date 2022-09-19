import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./Components/contact/Contact";
import Services from "./Components/services/Services";


function App() {
  return (
    <div className="app">
      

      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/services" element = {<Services/>} />
        </Routes>
      </Router>

      {/* <Home/>
      <About/> */}
    </div>
  );
}

export default App;
