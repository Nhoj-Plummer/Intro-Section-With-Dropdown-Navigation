import React from "react"
import "./navbar.css"

const Menu = () => (
  <>
    <p>
      <a href="#home"> Home</a>
    </p>
    <p>
      <a href="#wgpt3"> New</a>
    </p>
    <p>
      <a href="#possibility"> Popular</a>
    </p>
    <p>
      <a href="#features"> Trending</a>
    </p>
    <p>
      <a href="#blog"> Categories</a>
    </p>
  </>
)

function Navbar() {
  return <div className="navbar-container"></div>
}

export default Navbar
