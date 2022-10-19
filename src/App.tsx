import React from "react";

import "./App.scss";
import moon from "./assets/icon/icon-moon.svg";
import members from "./assets/image/members.png";
import member from "./assets/image/member.png";
// import FormFrom from "./components/FormFrom/FormFrom";
// import FormTo from "./components/FormTo/FormTo";
// import InvoiceResult from "./components/InvoiceResult/InvoiceResult";
import Invoice from "./components/Invoice";

function App() {
  return (
    <main className="container">
      <div className="wrapper">
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
          <div className="invoice-memebers">
            <div className="invoice-wrapper__form-card invoice-item">
              <span>From</span>
              <div className="invoice-wrapper__form-card-subtitle">
                <img
                  src={members}
                  className="invoice-wrapper__form-card-icon"
                />
                <p>Sender</p>
              </div>
            </div>
            <div className="invoice-wrapper__form-card invoice-item">
              <span>To</span>
              <div className="invoice-wrapper__form-card-subtitle">
                <img src={member} className="invoice-wrapper__form-card-icon" />
                <p>Recipient</p>
              </div>
            </div>
          </div>

          <Invoice />

          {/* <InvoiceItem /> */}
          {/* <FormFrom />
          <FormTo /> */}
        </section>
        {/* <InvoiceResult /> */}
      </div>
      </div>
    </main>
  );
}

export default App;
