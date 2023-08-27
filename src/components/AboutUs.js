import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <h1 className="aboutus-h1">About Us</h1>
      <p className="aboutus-para-lighttxt">
        <p className="aboutus-p">
        Food is any substance consumed to provide nutritional support for an
        organism. It is <br /> essential for the growth, development, and
        maintenance of life. Food is typically composed <br /> of macronutrients
        (carbohydrates, proteins, and fats) and micronutrients (vitamins and{" "}
        <br /> minerals). Different cultures and regions have diverse cuisines,
        preparation methods, and <br /> dietary preferences. <br />
        </p>
        <br />
        <h3>Nutritional Categories:</h3>
        <li className="aboutus-li">
          <ul>
            <span className="aboutus-head-lighttxt">Carbohydrates:</span> Provide energy
            and include sources like grains, fruits, and vegetables.
          </ul>
          <ul>
            <span className="aboutus-head-lighttxt">Proteins:</span> Essential for
            building and repairing tissues, found in meat, fish, beans, and
            nuts.
          </ul>
          <ul>
            <span className="aboutus-head-lighttxt">Fats:</span> Important for energy
            storage and cell function, found in oils, butter, and fatty foods.
          </ul>
          <ul>
            <span className="head-lighttxt">Vitamins:</span> Organic compounds
            required in small amounts for various bodily functions.
          </ul>
          <ul>
            <span className="aboutus-head-lighttxt">Minerals:</span> Inorganic elements
            needed for physiological processes (e.g., calcium, iron).
          </ul>
          <ul>
            {" "}
            <span className="aboutus-head-lighttxt">Water:</span> Crucial for hydration
            and various metabolic functions.
          </ul>
        </li>
      </p>
      <Footer />
    </>
  );
};

export default AboutUs;
