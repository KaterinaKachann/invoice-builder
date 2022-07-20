import React from "react";

import "./App.scss";
import moon from "./assets/icon/icon-moon.svg";
import FormFrom from "./components/FormFrom/FormFrom";
import InvoiceItem from "./components/InvoiceForm/InvoiceForm";
import InvoiceResult from "./components/InvoiceResult/InvoiceResult";

function App() {

  return (
    <main className="container">
      <header>
        <div className="header-wrapper">
          <h1>Invoice Builder</h1>
          <button type="button" className="header-btn">
            Dark
            <img src={moon} />
          </button>
        </div>
      </header>
      <div className="invoice-wrapper">
        <section className="invoice-wrapper__form">
          <h2 className="invoice-title">Invoice Form</h2>
          <InvoiceItem />
          <FormFrom />
          
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
        </section>

       <InvoiceResult />
      </div>

    </main>
  );
}

export default App;
