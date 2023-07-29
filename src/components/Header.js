import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <>
       <nav className="navbar">
        <div className="navbar-top">
          <div className="logo-left ">
            <img src="img\Icon (1).jpg" alt="Logo Left" className="logo-size" />
            {/* <div className='logo-left-txt'>
            <p style={{fontWeight:"bold"}}>Do you need help?</p>
            <p>+0(850) 544 7514</p>
            </div> */}
           
          </div>
          <div className="logo-center">
            <p
              style={{
                margin: 0,
                fontWeight: 500,
                fontSize: "20px",
                marginLeft: "15px",
              }}
            >
              Croson
            </p>
          </div>
          <div className="logo-right">
            <img src="img\Vector.png" alt="Logo Right" className="logo-size" />
            <img
              src="img\Instagram.png"
              alt="Logo Right"
              className="logo-size"
            />
            <img src="img\Twitter.png" alt="Logo Right" className="logo-size" />
            <img src="img\Icon.jpg" alt="Language-logo" className="logo-size" />
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="links-center">
            <div className="dropdown">
              <button className="dropbtn">Products</button>
              <div className="dropdown-content">
                <a href="/dlink1">Product 1</a>
                <a href="/dlink2">Product 2</a>
                <a href="/dlink3">Product 3</a>
              </div>
            </div>
            <a href="#Solutions">Solutions</a>
            <a href="#Softwares">Softwares</a>
            <a href="#Services">Services</a>
            <a href="#Corporate">Corporate</a>
            <a href="#News">News</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header