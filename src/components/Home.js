import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=> {
    AOS.init({duration: 2000})
  },[]);
  return (
    <>
      <Header />
      <div>
        <div>
          <motion.img src="img\Slider Bg.png" alt="" style={{ width: "100%" }} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          />
          <div class="overlay">
            <p className="para-1">
              We make Filling & Packaging <br />
              Machines for Food Industry
            </p>
            <p className="para-2">
              With our flexible production capacity and high technology, we
              produce <br />
              customized solutions for your needs.
            </p>
            <Link to="/products">
              <img
                src="img/Button With Icon (2).png"
                alt=""
                className="button-img"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Frist div start */}

      <div
        className="div-main "
        style={{ width: "100%", display: "flex" }}
        id="Solutions"
        data-aos="fade-up"
      >
        <div className="div-1" style={{ width: "54%", alignItems: "left" }} data-aos="fade-right">
          <p className="head-lighttxt">WHO WE ARE</p>
          <p className="main-txt">
            Crosson is an international group <br />
            dedicated to the food industry.
          </p>
          <p className="para-lighttxt">
            Crosson has twenty years’ experience in food, quality, automation
            and software <br /> which has been established in the food sector
            for Research, Efficiency and <br /> Solution Production. <br />
            <br /> It was not long to discover that supported to knowledge by
            scientific <br /> perspectives, would be the solution to the real
            needs of the sector.
          </p>
          <Link to="/AboutUs">
          <img
            src="img\Button With Icon (1).png"
            alt=""
            className="button-img"
          />
          </Link>
         
          <a
            href="/quality"
            style={{ color: "black", fontSize: "12px", marginLeft: "5px" }}
          >
            Quality Certificates
          </a>
        </div>
        <div className="div-2" style={{ width: "46%" }}  data-aos="fade-left">
          <div className="div-2child">
            <div>
              <img src="img\Icon (2).png" alt="" className="div-2child-img" />
            </div>
            <div>
              <p className="div-2child-dark-txt">Exported to 24 Countries</p>
              <p className="div-2child-light-txt">
                168 companies in 24 countries use <br /> our machines
              </p>
            </div>
          </div>
          <div className="div-2child">
            <div>
              <img src="img\Icon (3).png" alt="" className="div-2child-img" />
            </div>
            <div>
              <p className="div-2child-dark-txt">8 Billion Products Per Day</p>
              <p className="div-2child-light-txt">
                8 billion products are produced daily <br /> from our machines.
              </p>
            </div>
          </div>
          <div className="div-2child">
            <div>
              <img src="img\Icon (4).png" alt="" className="div-2child-img" />
            </div>
            <div>
              <p className="div-2child-dark-txt">
                We touch 850 million people a day
              </p>
              <p className="div-2child-light-txt">
                850 million people use products <br /> made by their machines
                every day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* First div end */}

      {/* Secound div start */}
      <div className="bg-image-div" id="Softwares" data-aos="fade-up">
        <div className="sec-div-main">
          <div className="div-1" style={{ width: "60%", marginTop: "80px" }}  data-aos="fade-left">
            <p className="head-lighttxt">WHAT WE DO</p>
            <p className="main-txt">
              With our flexible production capacity and <br /> high technology,
              we produce customized <br /> solutions for your needs.
            </p>
          </div>
          <div className="div-20"  data-aos="fade-right">
            <div className="div-2child" style={{ marginTop: "60px" }}>
              <div>
                <img src="img\Machines.png" alt="" className="div-2child-img" />
              </div>
              <div>
                <p className="div-2child-dark-txt">Watch Our Machines</p>
                <p className="div-2child-light-txt">2.34Min, 14.7MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-flex"  data-aos="fade-up">
          <div className="bottom-flex-child">
            <img src="img\Union1.png" alt="" className="div-2child-img" />
            <p className="bottom-flex-para">
              Filling and Packaging <br /> Machines
            </p>
          </div>
          <div className="bottom-flex-child">
            <img src="img\Union2.png" alt="" className="div-2child-img" />
            <p className="bottom-flex-para">
              End of Line <br /> Solutions
            </p>
          </div>
          <div className="bottom-flex-child">
            <img src="img\Union3.png" alt="" className="div-2child-img" />
            <p className="bottom-flex-para">
              Food Industry <br /> Machines Software
            </p>
          </div>
          <div className="bottom-flex-child">
            <img src="img\Union4.png" alt="" className="div-2child-img" />
            <p className="bottom-flex-para">
              7/24 Techincal <br /> Support
            </p>
          </div>
          <div className="bottom-flex-child">
            <img src="img\Icon (5).png" alt="" className="div-2child-img" />
            <p className="bottom-flex-para">
              Special Solutions <br /> Your Needs
            </p>
          </div>
        </div>
      </div>
      {/* Secound div end */}

      {/* Third div start */}
      <div className="third-div-main" id="Services" data-aos="fade-up">
        <div className="third-div1" data-aos="fade-right">
          <div className="third-div-p">
            <p className="third-div1-p1">Filling and Packaging Machines</p>
            <p className="third-div-p2">
              Liquorice lemon drops powder chocolate liquorice candy dessert
              gummi bears. Caramels marzipan <br /> donut jujubes sweet roll.
              Powder croissant toffee shortbread chocolate sweet pie.
            </p>
          </div>
          <div className="third-div1-child">
            <div>
              <img src="img\third1.png" alt="" className="third-div1-img" />
              <p className="third-div1-img-p">Linear Machines</p>
            </div>
            <div>
              <img src="img\third3.png" alt="" className="third-div1-img" />
              <p className="third-div1-img-p">Rotary Machines</p>
            </div>
            <div>
              <img src="img\third2.png" alt="" className="third-div1-img" />
              <p className="third-div1-img-p">Bottle Filling Machines</p>
            </div>
          </div>
        </div>
        <div className="third-div2" data-aos="fade-left">
          <div className="third-div2-1">
            <div className="div-2child">
              <div>
                <p className="div-third-dark-txt">
                  Let's Plan an <br />
                  Online Meeting
                </p>
                <p className="div-third-light-txt">We are Available Now</p>
              </div>
              <div>
                <img src="img\cal.png" alt="" className="div-third-img" />
              </div>
            </div>
          </div>
          <div className="third-div2-2">
            <p className="third-div2-2-p">
              Are you interested? Contact our <br />
              sales department now
            </p>
            <div style={{ display: "flex" }}>
              <img src="img\Phone.png" alt="" className="third-div2-2-p-img" />

              <div className="third-div2-2-p2">
                <p>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Erkan giris</span> /
                  Sales Manager
                </p>
                <p>+0(850) 544 7514</p>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <img src="img\Msg.png" alt="" className="third-div2-2-p-img" />

              <div className="third-div2-2-p2">
                <p>Sales Department</p>
                <p style={{ fontWeight: 500 }}>sales@crosson.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third div end */}

      {/* Fourth div start */}
      <div className="fourth-div" id="Corporate" data-aos="fade-up">
        <div className="fourth-div-1">
          <div className="fourth-div-p1">HOW WE DO</div>
          <div className="fourth-div-p2">A journey from design to product.</div>
          <div className="fourth-div-p3">
            Starting from the planning of the product our customer wants;
            design, manufacturing, <br /> software, mounting, installation &
            comissioning are made by us.
          </div>
        </div>
        <div className="fourthdiv-2">
          <div className="container">
            <div className="card">
              <img className="card-img" src="img\card1.png" alt="" />
              <div className="card-body">
                <h5 className="card-title">Product Design</h5>
                <p className="card-text">
                  Toffee sweet roll caramels oat cake <br /> lemon drops cupcake
                  sweet roll <br /> halvah ice cream.
                </p>
                <a href="/cardlink1" className="card-link">
                  Read More
                </a>
              </div>
            </div>

            <div className="card">
              <img className="card-img" src="img\card3.png" alt="" />
              <div className="card-body">
                <h5 className="card-title">Planing & Production</h5>
                <p className="card-text">
                  Center we have developped many <br /> patents in filling and
                  packaging <br /> technology.
                </p>
                <a href="/cardlink2" className="card-link">
                  Read More
                </a>
              </div>
            </div>

            <div className="card">
              <img className="card-img" src="img\card2.png" alt="" />
              <div className="card-body">
                <h5 className="card-title">Installation & Comisioning</h5>
                <p className="card-text">
                  Marshmallow pastry jelly beans <br /> chocolate bar cake
                  pastry powder <br /> gummi bears.
                </p>
                <a href="/cardlink3" className="card-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth div start */}

      {/* Fifth div start */}
      <div className="fifth-div" id="News" data-aos="fade-up">
        <div className="fifth-div-child">
          <div className="fourth-div-1" data-aos="fade-up">
            <div className="fourth-div-p1">COMPANY NEWS</div>
            <div className="fourth-div-p2">News from Crosson</div>
            <div className="fourth-div-p3">
              Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah
              sesame snaps <br /> chocolate cake gummies sugar plum cotton candy
              cupcake sweet
            </div>
          </div>
          <div className="fifth-div2">
            <div className="card5">
              <img className="card5-img" src="img\Image5.png" alt="" data-aos="fade-right"/>
              <div className="card5-body">
                <h5 className="card5-title">
                  Crosson Holding’s 58th <br /> ordinary general assembly <br />
                  convened
                </h5>
                <p className="card5-text">
                  Toffee sweet roll caramels oat cake <br /> lemon drops cupcake
                  sweet roll <br /> halvah ice cream.
                </p>
                <img
                  src="img\Button With Icon.png"
                  alt=""
                  className="button-img"
                  
                />
              </div>
            </div>
            <div className="card5">
              <img className="card5-img" src="img\Image5.1.png" alt=""  data-aos="fade-left"/>
              <div className="card5-body">
                <h5 className="card5-title">
                  Crosson Holding’s new <br /> Board of Directors has been{" "}
                  <br />
                  determined.
                </h5>
                <p className="card5-text">
                  Toffee sweet roll caramels oat cake <br /> lemon drops cupcake
                  sweet roll <br /> halvah ice cream.
                </p>
                <img
                  src="img\Button With Icon.png"
                  alt=""
                  className="button-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fifth div end */}

      {/* Footer  */}
      <Footer />
    </>
  );
};

export default Home;
