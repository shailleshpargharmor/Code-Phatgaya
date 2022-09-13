import "./header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <img src="https://via.placeholder.com/95x85" alt="" />
      </div>
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Components/contact">Contact-Us</Link></li>
          <li><Link to="/Components/about">About-Us</Link></li>
          <li><Link to="/Components/services">Services</Link></li>
        </ul>
      </div>
    </div>
  )
}
