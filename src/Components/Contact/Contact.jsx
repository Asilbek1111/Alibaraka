import React from "react";
import "./Contact.css";
import Farmer from "../../Images/farmer.png";
import Contact1 from "../../Images/contact1.png";
import Contact2 from "../../Images/contact2.png";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <div className="contact">
      <Fade left>
        <img className="contact1" src={Contact1} alt="" />
        <img className="contact2" src={Contact2} alt="" />
        <div className="c-card">
          <div className="c-top">
            <img src={Farmer} alt="" />
          </div>
          <div className="c-bottom">
            <h1>Still are you hesitating?</h1>
            <p>
              Your work is going to fill a large part of your life, and the only
              way to be truly satisfied.
            </p>
            <form>
              <div className="texts">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter phone num" />
              </div>
              <textarea
                name=""
                id=""
                cols="60"
                rows="10"
                placeholder="Enter your subject"
              ></textarea>

              <button className="c-btn">Send Message</button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
