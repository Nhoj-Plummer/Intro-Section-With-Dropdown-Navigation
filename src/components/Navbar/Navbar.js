import React, {useState} from "react"
import "./navbar.css"
import {Logo, MenuIcon, MenuCloseIcon, ArrowUp, ArrowDown, TodoList, Calender, Reminder, Planning} from "../../assets/assestindex"

const Menu = ({toggleSectionMenu, handleOpen, toggleSectionMenu2, handleOpen2}) => (
  <>
    <p>
      {toggleSectionMenu ? (
        <a href="#features" onClick={handleOpen}>
          Features <img src={ArrowDown} alt="off" />
        </a>
      ) : (
        <a href="#features" onClick={handleOpen}>
          Features <img src={ArrowUp} alt="on" />
        </a>
      )}
    </p>
    {!toggleSectionMenu && (
      <div className="navbar-feature-subsection">
        <a href="#todolist">
          <img src={TodoList} alt="Icon" /> <span>Todo List</span>
        </a>
        <a href="#calender">
          <img src={Calender} alt="Icon" /> <span>Calender</span>
        </a>
        <a href="#reminders">
          <img src={Reminder} alt="Icon" /> <span>Reminders</span>
        </a>
        <a href="#planning">
          <img src={Planning} alt="Icon" /> <span>Planning</span>
        </a>
      </div>
    )}
    <p>
      {toggleSectionMenu2 ? (
        <a href="#company" onClick={handleOpen2}>
          Company <img src={ArrowDown} alt="off" />
        </a>
      ) : (
        <a href="#company" onClick={handleOpen2}>
          Company <img src={ArrowUp} alt="off" />
        </a>
      )}
    </p>
    {!toggleSectionMenu2 && (
      <div className="navbar-feature-subsection">
        <a href="#history">History</a>
        <a href="#ourteam">Our Team</a>
        <a href="#blog">Blog</a>
      </div>
    )}
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
  const [toggleSectionMenu2, setToggleSectionMenu2] = useState(true)

  const handleOpen = e => {
    e.preventDefault()
    setToggleSectionMenu(!toggleSectionMenu)
    console.log("Function Called", toggleSectionMenu)
  }

  const handleOpen2 = e => {
    e.preventDefault()
    setToggleSectionMenu2(!toggleSectionMenu2)
    console.log("Function Called 2", toggleSectionMenu2)
  }

  // const handleGreyOut = e => {
  //   e.preventDefault()
  // }

  return (
    
      <div className="navbar-container">
        {!toggleMenu && (<div className="navbar-greyout"></div>)}
        <div className="navbar-container_image">
          <img src={Logo} alt="Logo" />
        </div>
        {/* Desktop */}
        <div className="navbar-desktop-container">
          <div className="navbar-desktop-menu">
            <Menu handleOpen={handleOpen} toggleSectionMenu={toggleSectionMenu} handleOpen2={handleOpen2} toggleSectionMenu2={toggleSectionMenu2} />
          </div>

          <div className="navbar-desktop-login">
            <a href="#login">Login</a>
            <a href="#register">Register</a>
          </div>
        </div>

        {/* Mobile */}
        <div className="navbar-mobile-container">
          <div className="navbar-mobile-toggle">{toggleMenu ? <img src={MenuIcon} alt="off" onClick={() => setToggleMenu(false)} /> : <img src={MenuCloseIcon} alt="on" onClick={() => setToggleMenu(true)} />}</div>
          {!toggleMenu && (
            <div className="navbar-mobile_menu">
              <Menu handleOpen={handleOpen} toggleSectionMenu={toggleSectionMenu} handleOpen2={handleOpen2} toggleSectionMenu2={toggleSectionMenu2} />
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
