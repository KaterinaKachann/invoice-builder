import React, { useState } from "react";
import "../../App.scss";
import InvoiceFormItem from "./InvoiceFormItem";

function InvoiceItem() {
  let dateNow = new Date().toISOString().split("T")[0];
  const [invoiceList, setInvoiceList] = useState([<InvoiceFormItem/>] as Array);
  function addInvoiceItem() {
    setInvoiceList(invoiceList.concat(<InvoiceFormItem key={invoiceList.length}/>));
  }
  function deleteLastItem(){
    setInvoiceList(invoiceList.slice(0, -1));
  }

  return (
    <div className="invoice-wrapper__form-card">
      <h3 className="invoice-title__from">Invoice info</h3>
      <div className="invoice-info">
        <div className="invoice-input__text">
          <label>Invoice Number:</label>
          <input
            type="text"
            required
            title="Click to change number"
            value="001"
          />
        </div>
        <div className="invoice-input__date">
          <label>Invoice Date:</label>
          <input
            type="date"
            required
            title="Click to change date"
            value={dateNow}
          />
        </div>
        <div className="invoice-input__date">
          <label>Due:</label>
          <input
            type="date"
            required
            title="Click to change date"
            value={dateNow}
          />
        </div>
        <div className="invoice-table">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Hours</th>
                <th>Rate</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {invoiceList} 
            </tbody>
          </table>
          {invoiceList.length >= 2 ? <button className="btn-delete" onClick={deleteLastItem}>Delete Last Item</button> : <div></div>}
          <button onClick={addInvoiceItem}>Add New Invoice Item</button>
        </div>
      </div>
    </div>
  );
}

export default InvoiceItem;
