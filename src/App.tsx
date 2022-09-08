import React from "react";

import "./App.scss";
import moon from "./assets/icon/icon-moon.svg";
import FormFrom from "./components/FormFrom/FormFrom";
import FormTo from "./components/FormTo/FormTo";
import InvoiceItem from "./components/InvoiceForm/InvoiceForm";
import InvoiceResult from "./components/InvoiceResult/InvoiceResult";
import Invoice from "./components/Invoice";

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
          <Invoice />
          {/* <InvoiceItem /> */}
          {/* <FormFrom />
          <FormTo /> */}
        </section>
        {/* <InvoiceResult /> */}
      </div>
    </main>
  );
}

export default App;
