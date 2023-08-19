import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file
import ow from "./online-world.jpg";

function LandingPage() {
  const url =
    "http://dorsin.react.themesbrand.com/assets/images/online-world.svg";
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarBgColor("#000"); // Change to black when scrolling
    } else {
      setNavbarBgColor("transparent"); // Change to transparent when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav style={{ backgroundColor: navbarBgColor }}>
        <div className="" style={{ color: "White" }}>
          DOSRIN
        </div>
        <ul>
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* <div className="background-image">Your background image</div> */}
      <div className="background-image">
        <div className="overlay">
          <h1>We help startups launch their products</h1>
          <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
        </div>
      </div>

      <div>
        <p style={{ fontSize: 32, textAlign: "center", fontWeight: "bold" }}>
          OUR SERVICES
        </p>
        <p style={{ textAlign: "center", fontWeight: "lighter" }}>
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences
          <br /> that have meaning and add a value for our clients.
        </p>
      </div>
      <br />
      <br />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ textAlign: "center" }}>Digital Design</h3>
            <p>
              Some quick example text to build on the card
              <br />
              title and make up the bulk of the card's content. <br />
              Moltin gives you the platform.
            </p>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Unlimited Colors</h3>
            <p>
              Credibly brand standards compliant users
              <br />
              without extensible services. Anibh euismod
              <br />
              tincidunt ut laoreet
            </p>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Startegy Solution</h3>
            <p>
              Some quick example text to build on the card
              <br />
              title and make up the bulk of the card's content. <br />
              Moltin gives you the platform.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ textAlign: "center" }}>Digital Design</h3>
            <p>
              Some quick example text to build on the card
              <br />
              title and make up the bulk of the card's content. <br />
              Moltin gives you the platform.
            </p>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Unlimited Colors</h3>
            <p>
              Credibly brand standards compliant users
              <br />
              without extensible services. Anibh euismod
              <br />
              tincidunt ut laoreet
            </p>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Startegy Solution</h3>
            <p>
              Some quick example text to build on the card
              <br />
              title and make up the bulk of the card's content. <br />
              Moltin gives you the platform.
            </p>
          </div>
        </div>
      </div>
      {/* Content of your landing page */}
      <br />
      <br />
      <div style={{ backgroundColor: "#F8F9FA", display: "flex" }}>
        <br />
        <br />
        <div className="text-side">
          <br />
          <br />
          <p style={{ fontWeight: "bolder", marginLeft: 40, fontSize: 28 }}>
            A digital web design studio
            <br />
            modern & engaging online experiences
          </p>
          <p style={{ marginLeft: 40, fontWeight: "lighter" }}>
            Separated they live in Bookmarksgrove right at the coast of
            <br />
            Semantics, a large language ocean. A small river named
            <br />
            flows by their place and supplies it with the necessary .
          </p>
          <ul style={{ marginLeft: 15, listStyle: "none" }}>
            <li className="desig">We put a lot of effort in design.</li>
            <li className="desig">
              The most important ingredient of successful website.
            </li>
            <li className="desig">
              Sed ut perspiciatis unde omnis iste natus error sit.
            </li>
            <li className="desig">Submit Your Organization</li>
          </ul>
        </div>
        <div className="img-side">
          <img src={url} alt="" width="50%" style={{ marginLeft: "40%" }} />
        </div>
      </div>
      <div>
        <br />
        <br />
        <div className="background">
          <div className="overlay">
            <h1>Build Your Dream Website Today</h1>
            <p>
              But nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her.
            </p>
            <button style={{ width: "30%", height: 40, borderRadius: "10%" }}>
              View Plan & Pricing
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <p style={{ fontSize: 32, textAlign: "center", fontWeight: "bold" }}>
          OUR PRICING
        </p>
        <p style={{ textAlign: "center", fontWeight: "lighter" }}>
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences
          <br /> that have meaning and add a value for our clients.
        </p>
        <div className="pricing-cards-container">
          <div className="pricing-card">
            <h2>ECONOMY</h2>
            <span className="price">$19</span>
            <p>BILLING PER MONTH</p>
            <hr />
            <p>
              Bandwidth:
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                1GB
              </span>
            </p>
            <br />
            <p>
              Onlinespace:{" "}
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                50 MB
              </span>
            </p>
            <br />
            <p>
              Support:{" "}
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>NO</span>
            </p>
            <br />
            <p>
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>1</span>{" "}
              Domain
            </p>
            <br />
            <p>
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>NO</span>{" "}
              Hidden Fees
            </p>
            <br />
            <button className="pricing-button">Choose Plan</button>
          </div>
          <div className="pricing-card">
            <h2>DELUXE</h2>
            <span className="price">$39</span>
            <p>BILLING PER MONTH</p>
            <hr />
            <p>
              Bandwidth:
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                10GB
              </span>
            </p>
            <br />
            <p>
              Onlinespace:{" "}
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                500 MB
              </span>
            </p>
            <br />
            <p>
              Support:{" "}
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                Yes
              </span>
            </p>
            <br />
            <p>
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>10</span>{" "}
              Domain
            </p>
            <br />
            <p>
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>NO</span>{" "}
              Hidden Fees
            </p>
            <br />
            <button className="pricing-button">Choose Plan</button>
          </div>
          <div className="pricing-card">
            <h2>ULTIMATE</h2>
            <span className="price">$79</span>
            <p>BILLING PER MONTH</p>
            <hr />
            <p>
              Bandwidth:
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                100GB
              </span>
            </p>
            <br />
            <p>
              Onlinespace:{" "}
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                2 GB
              </span>
            </p>
            <br />
            <p>
              Support:{" "}
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                Yes
              </span>
            </p>
            <br />
            <p>
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>
                Unlimited
              </span>{" "}
              Domain
            </p>
            <br />
            <p>
              <span style={{ color: "#FB3E3E", fontWeight: "bolder" }}>NO</span>{" "}
              Hidden Fees
            </p>
            <br />
            <button className="pricing-button">Choose Plan</button>
          </div>
        </div>
      </div>
      <div>
        <div className="get-in-touch-container">
          <div className="addresses">
            <h2>Office Address 1:</h2>
            <address>
              <p>123 Street, City</p>
              <p>Country</p>
            </address>
            <h2>Office Address 1:</h2>
            <address>
              <p>123 Street, City</p>
              <p>Country</p>
            </address>
            <h2>Office Address 1:</h2>
            <address>
              <p>123 Street, City</p>
              <p>Country</p>
            </address>
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message"></textarea>
              <button className="touch-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div
          className="footer"
          style={{
            backgroundColor: "#272A33",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <div style={{ marginTop: 50 }}>
            <p style={{ fontWeight: "bolder" }}>DOSRIN</p>

            <p>Home</p>
            <p>Contact</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div style={{ marginTop: 50 }}>
            <p style={{ fontWeight: "bolder" }}>INFORMATION</p>

            <p>Terms & Condition </p>
            <p>About us</p>
            <p> Jobs </p>
            <p> Bookmarks</p>
          </div>
          <div style={{ marginTop: 50 }}>
            <p style={{ fontWeight: "bolder" }}>SUPPORT</p>

            <p>FAQ</p>
            <p>Contact</p>
            <p>Discussions</p>
            <p>Contact Us</p>
          </div>
          <div style={{ marginRight: 250, marginTop: 50 }}>
            <p style={{ fontWeight: "bolder" }}>Subscribe</p>

            <p>In an ideal world this text wouldn’t</p>
            <p>exist, a client would acknowledge the</p>
            <p>importance of having web copy before</p>
            <p>the design starts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;