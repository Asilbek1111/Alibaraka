// import "./section.scss";
// import Product from "../Products/Product";

// Images

import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./Buy.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "rgba(34, 2, 110, 0.5)",
    backdropFilter: "blur(50px)",
    border: "2px solid black",
    boxShadow: "0 7px 10px 0 #777 ",
    padding: "25px",
  },
};

const Cart = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "red";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const Buy = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.length > 0 &&
      e.target[1].value.length > 0 &&
      e.target[2].value.length > 0
    ) {
      let botMessege = `
New Message Asilbek😊%0A
Ismi 👤: ${e.target[0].value}%0A
Raqam ☎: ${e.target[1].value}%0A 
Xabar ✏️ ${e.target[2].value}%0A  
            `;

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
    <section>
      <button onClick={openModal} className="buy">
       Bog'lanish
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className="modal"
      >
        <div className="btn-wrap">
          <button className="close" onClick={closeModal}>
            x
          </button>
        </div>

        <form id="myForm" onSubmit={Buy} className="form-list">
          <label className="form-label">
            <input name="name" id="name" type="text" className="form-input" />
          </label>

          <label className="form-label">
            <input
              id="tel"
              type="number"
              name="tel"
              placeholder="+998"
              className="form-input"
            />
          </label>
          <textarea id="textarea" name="textarea" className="form-text" />
          <button id="btnSubmit" type="submit" className="form-btn">
            Send
          </button>
        </form>
      </Modal>
    </section>
  );
};

export default Cart;
