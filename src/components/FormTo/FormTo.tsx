import React from "react";
import "./FormTo.scss";

function FormTo(props) {
  if (!props.showTo) {
    return null;
  }
  return (
    <div className="modal">
      <div className="invoice-wrapper__form-card-modal">
        <div className="invoice-title__wrapper">
          <h3 className="invoice-title__from">To</h3>
          <button className="invoice-title__btn" onClick={props.onClose}>
            x
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
  );
}

export default FormTo;
