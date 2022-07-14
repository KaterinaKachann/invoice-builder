import React from "react";

import "./App.scss";
import moon from "./assets/icon/icon-moon.svg";
import InvoiceItem from "./components/InvoiceForm/InvoiceForm";

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
          <div className="invoice-wrapper__form-card">
            <h3 className="invoice-title__from">From</h3>
            <div className="invoice-input__file">
              <label className="invoice-label">
                <div className="invoice-btn__logo">
                  Select
                  <input type="file" id="fileupload" />
                </div>
                &nbsp;your logo
              </label>
            </div>
            <div className="invoice-input__text">
              <label>Company/ Client Name</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-input__text">
              <label>Country</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-input__text">
              <label>First Name</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-input__text">
              <label>Last Name</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-input__text">
              <label>Tax registration number</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-input__text">
              <label>Email</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-input__text">
              <label>Address</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-input__text">
              <label>Phone</label>
              <input type="text" autoComplete="off" required />
            </div>
            <div className="invoice-button__submit">
              <button type="submit">Set Sender Details</button>
            </div>
          </div>
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

        <section className="invoice-wrapper__result">
          <h2 className="invoice-title">Invoice Result</h2>
        </section>
      </div>

    </main>
  );
}

export default App;
