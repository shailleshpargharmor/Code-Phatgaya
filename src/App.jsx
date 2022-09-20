import About from "./pages/about/About";
import Header from "./Components/header/Header";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Data from "./Components/data/Data";
import Details from "./Components/datadetails/Details";


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
          <Route path="/data" element = {<Data />} />
          <Route path="/data/:userId" element = {<Details />} />
          {/* <Route path="/data/2" element = {<Details />} />
          <Route path="/data/3" element = {<Details />} /> */}
        </Routes>
      </Router>

      {/* <Home/>
      <About/> */}
    </div>
  );
}

export default App;
