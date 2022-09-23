import About from "./pages/about/About";
import Header from "./Components/header/Header";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Data from "./Components/data/Data";
import Details from "./Components/datadetails/Details";
import User from "./Components/UsersData/User";


function App() {

  let users = [
    { id: 1, name: "Shailesh", email: "pargharmors90@gmail.com", phoneno: "0123456789"},
    { id: 2, name: "Santosh", email: "santosh@gmail.com", phoneno: "0123456788"},
    { id: 3, name: "Harshit", email: "harshit@gmail.com", phoneno: "0123456787"},
    { id: 4, name: "Vishal", email: "vishal@gmail.com", phoneno: "0123456786"},
    { id: 5, name: "Sagar", email: "sagar@gmail.com", phoneno: "0123456785"},
    { id: 6, name: "Aakash", email: "aakash@gmail.com", phoneno: "0123456784"},
    { id: 7, name: "Suraj", email: "suraj@gmail.com", phoneno: "0123456783"}
  ]

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
          <Route path="/user/:id" element = {<User />}/>
        </Routes>
        {
          users.map((items) =>
          <div>
            <Link to={"/user/" + items.id}>{items.name}</Link>
          </div>)
        }
      </Router>

     

      {/* <Home/>
      <About/> */}
    </div>
  );
}

export default App;
