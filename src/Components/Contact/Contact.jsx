import React from "react";
import "./Contact.css";
import Farmer from "../../Images/farmer.png";
import Contact1 from "../../Images/contact1.png";
import Contact2 from "../../Images/contact2.png";
import { Fade } from "react-reveal";

const Contact = () => {
  const formBtn = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.length > 0 &&
      e.target[1].value.length > 0 &&
      e.target[2].value.length > 0
    ) {
      let botMessege = `
Salom Asilbek, Yangi Xabar!😊%0A
Ismi 👤: ${e.target[0].value}%0A
Raqam ☎: ${e.target[1].value}%0A 
Xabar ☎: ${e.target[2].value}%0A              
                `;
      //  console.log(botMessege)

      let url = `https://api.telegram.org/bot5539239116:AAEcoa289s8Pwq-bT_5efs2003IjnjYkZpQ/sendMessage?chat_id=1328407566&text=${botMessege}`;
      async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      fetchAsync(url);
      e.target[0].value = "";

      e.target[1].value = "";

      e.target[2].value = "";
    } else {
      return -1;
    }
  };
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
            <form onSubmit={formBtn}>
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

              <button className="c-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
