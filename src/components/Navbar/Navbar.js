import React, { useState } from "react"
import "./navbar.css"
import Logo from "../../assets/logo.svg"

// const Menu = () => (
//   <>
//     <p>
//       <a href="#features"> Features</a>
//     </p>
//     <p>
//       <a href="#company">Company</a>
//     </p>
//     <p>
//       <a href="#careers">Careers</a>
//     </p>
//     <p>
//       <a href="#about"> About</a>
//     </p>
//   </>
// )

const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <div className="navbar-container">
      <div className="navbar-container_image">
        <img src={Logo} alt="Logo" />
      </div>
      {/* Desktop */}

      {/* Mobile */}
    </div>
  )
}

export default Navbar
