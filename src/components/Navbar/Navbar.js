import React, { useState } from "react"
import "./navbar.css"
import Logo from "../../assets/logo.svg"
import Menu1 from "../../assets/icon-menu.svg"
import Menu2 from "../../assets/icon-close-menu.svg"
import ArrowUp from "../../assets/icon-arrow-up.svg"
import ArrowDown from "../../assets/icon-arrow-down.svg"

const Menu = ({ toggleSectionMenu, setToggleSectionMenu }) => (
  <>
    <p>{/* <a href="#features"> Features </a> {toggleSectionMenu ? <img src={ArrowUp} alt="off" onMouseOver={() => setToggleSectionMenu(false)} /> : <img src={ArrowDown} alt="on" onMouseOver={() => setToggleSectionMenu(true)} />} */}</p>
    <p>
      <a href="#company">Company</a>
    </p>
    <p>
      <a href="#careers">Careers</a>
    </p>
    <p>
      <a href="#about"> About</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)
  const [toggleSectionMenu, setToggleSectionMenu] = useState(true)

  // const handleOpen = () => {
  //   setToggleSectionMenu(!toggleSectionMenu)
  // }

  return (
    <div className="navbar-container">
      <div className="navbar-container_image">
        <img src={Logo} alt="Logo" />
      </div>
      {/* Desktop */}
      <div className="navbar-desktop-container">
        <div className="navbar-desktop-menu">
          <Menu />
        </div>

        <div className="navbar-desktop-login">
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </div>
      </div>

      {/* Mobile */}
      <div className="navbar-mobile-container">
        <div className="navbar-mobile-toggle">{toggleMenu ? <img src={Menu1} alt="off" onClick={() => setToggleMenu(false)} /> : <img src={Menu2} alt="on" onClick={() => setToggleMenu(true)} />}</div>
        {!toggleMenu && (
          <div className="navbar-mobile_menu">
            <Menu toggleSectionMenu={toggleSectionMenu} setToggleSectionMenu={setToggleSectionMenu} />
            <div className="navbar-mobile_login">
              <a href="#login">Login</a>
              <a href="#register">Register</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
