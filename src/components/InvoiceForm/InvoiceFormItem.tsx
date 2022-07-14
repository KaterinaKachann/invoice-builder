import React, { useState } from "react";
import "../../App.scss";

function InvoiceFormItem() {
  const [item, setItem] = useState(true);

  function closeItem() {
    setItem(false);
  }
  return (
      <tr>
        <td>
          <div className="invoice-input__text">
            <input
              type="text"
              required
              title="Click to change number"
              value="Set up ads"
            />
          </div>
        </td>
        <td>
          <div className="invoice-input__text">
            <input
              type="text"
              required
              title="Click to change number"
              value="3h"
            />
          </div>
        </td>
        <td>
          <div className="invoice-input__text">
            <input
              type="text"
              required
              title="Click to change number"
              value="10$"
            />
          </div>
        </td>
        <td>
          <div className="invoice-input__text">
            <input
              type="text"
              required
              title="Click to change number"
              value="30$"
            />
          </div>
        </td>
      </tr>
  );
}

export default InvoiceFormItem;
