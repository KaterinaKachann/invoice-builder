import React from "react";

function FormTo() {
  return (
    <div className="invoice-wrapper__form-card">
      <h3 className="invoice-title__from">To</h3>
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
  );
}

export default FormTo;
