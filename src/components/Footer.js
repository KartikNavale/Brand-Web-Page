import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=> {
    AOS.init({duration: 2000})
  },[]);
    return (
      <>
<footer className="footer-bg" id="contact"  >
{/* data-aos="fade-up" */}
        <div className="footer-main">
          <div className="footer-1">
            Have a any questions? <br />
            Contact Us
          </div>
          <div className="footer-2">
            <div className="footer-2-1 footer-media">
              <img src="img\Phone.png" alt="" className="footer-logo" />
              <div className="footer-2-1-p">
                <p>Phone Number</p>
                <p className="footer-bold">+0(850)544 7514</p>
              </div>
            </div>
            <div className="footer-2-1 footer-media">
              <img src="img\Msg.png" alt="" className="footer-logo" />
              <div className="footer-2-1-p">
                <p>E-Mail Address</p>
                <p className="footer-bold">hello@crosson.com</p>
              </div>
            </div>
            <div className="footer-2-1" style={{ marginTop: "15px" }}>
              <img src="img\map.png" alt="" className="footer-logo" />
              <div className="footer-2-1-p">
                <p>Headquarters</p>
                <p className="footer-bold">
                  One Apple Park Way; Cupertino <br /> CA 95014, U.S.A.
                </p>
                <p>
                  <a href="/get">Get Direction</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-3">
            <table>
              <tr>
                <th>Products</th>
                <th>Solutions</th>
                <th>Corporate</th>
              </tr>
              <tr>
                <td>Filling Machines</td>
                <td>End of Line Solutions</td>
                <td>About Us</td>
              </tr>
              <tr>
                <td>Bottle Filling Series</td>
                <td>Food Industry Machines Software</td>
                <td>Our Values</td>
              </tr>
              <tr>
                <td>Package Machines</td>
                <td>Research Solutions</td>
                <td>Human Resorces</td>
              </tr>
              <tr>
                <td>Linear Machines</td>
                <td>Conveyor Solutions</td>
                <td>News</td>
              </tr>
              <tr>
                <td>Rotary Machines</td>
                <td>Special Solutions Your Needs</td>
                <td>Contact</td>
              </tr>
            </table>
          </div>
          <div className="footer-4">
            <img src="img\ladder.png" alt=""  className="footer-4-img"/>
            <div className="footer-4-2">
              <p className="footer-4-p1">Career Opportunities</p>
              <p className="footer-4-p2">
                Cake pudding lollipop pastry cupcake chocolate. <br /> Gummi
                bears halvah sesame snaps.
              </p>
              <div style={{display:"flex", justifyContent:"center"}}>
              <img src="img\Button With Icon.png" alt=""  className="button-img"/>
              </div>
              
            </div>
          </div>
          
        </div>
        
      </footer>
      <div className="footer-end">
            <p className="footer-end-child">Copyright by Erkan Giris  |  All rights reserverd</p>
            <p className="footer-end-child">Our Privacy and Personal Data Protection Policy  |   Terms and Conditions of Use</p>
          </div>
      </>
  );
};

export default Footer;