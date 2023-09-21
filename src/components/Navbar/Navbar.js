import React, {useState} from "react"
import "./navbar.css"
import {Logo, MenuIcon, MenuCloseIcon} from "../../assets/assestindex"
import ArrowUp from "../../assets/icon-arrow-up.svg"
import ArrowDown from "../../assets/icon-arrow-down.svg"

const Menu = ({toggleSectionMenu, handleOpen}) => (
  <>
    <p>
      {toggleSectionMenu ? (
        <a href="#features" onClick={handleOpen}>
          Features <img src={ArrowUp} alt="off" />
        </a>
      ) : (
        <a href="#features" onClick={handleOpen}>
          Features <img src={ArrowDown} alt="off" />
        </a>
      )}
    </p>
    {!toggleSectionMenu && (
      <div className="navbar-feature-subsection">
        <a href="#todolist">
          <img /> Todo List
        </a>
      </div>
    )}
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

  const handleOpen = e => {
    e.preventDefault()
    setToggleSectionMenu(!toggleSectionMenu)
    console.log("Function Called", toggleSectionMenu)
  }

  return (
    <div className="navbar-container">
      <div className="navbar-container_image">
        <img src={Logo} alt="Logo" />
      </div>
      {/* Desktop */}
      <div className="navbar-desktop-container">
        <div className="navbar-desktop-menu">
          <Menu handleOpen={handleOpen} toggleSectionMenu={toggleSectionMenu} />
        </div>

        <div className="navbar-desktop-login">
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </div>
      </div>

      {/* Mobile */}
      <div className="navbar-mobile-container">
        <div className="navbar-mobile-toggle">{toggleMenu ? <img src={(MenuIcon, MenuCloseIcon)} alt="off" onClick={() => setToggleMenu(false)} /> : <img src={MenuCloseIcon} alt="on" onClick={() => setToggleMenu(true)} />}</div>
        {!toggleMenu && (
          <div className="navbar-mobile_menu">
            <Menu handleOpen={handleOpen} toggleSectionMenu={toggleSectionMenu} />
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
