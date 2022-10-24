import React from "react";
import "./FormTo.scss";

function FormTo({ activeTo, setActiveTo }) {
  return (
    <div
      className={activeTo ? "modal-to active-to" : "modal-to none-to"}
      onClick={() => setActiveTo(false)}
    >
      <div
        className={
          activeTo ? "modal__content-to" : "modal__content-to active-to" 
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="invoice-wrapper__form-card-modal ">
          <div className="invoice-wrapper__title-content">
            <h3 className="invoice-title__from">To</h3>
            <button
              className="modal__content-btn"
              onClick={() => setActiveTo(false)}
            >
              х
            </button>
          </div>
          <div className="invoice-input__text">
            <label>Name/ Company Name</label>
            <input type="text" required />
          </div>
          <div className="invoice-input__text">
            <label>Country</label>
            <input type="text" required />
          </div>
          <div className="invoice-input__text">
            <label>First Name</label>
            <input type="text" required />
          </div>
          <div className="invoice-input__text">
            <label>Last Name</label>
            <input type="text" required />
          </div>
          <div className="invoice-input__text">
            <label>Email</label>
            <input type="text" required />
          </div>
          <div className="invoice-input__text">
            <label>Address</label>
            <input type="text" required />
          </div>
          <div className="invoice-input__text">
            <label>Phone</label>
            <input type="text" required />
          </div>
          <div className="invoice-button__submit">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormTo;
