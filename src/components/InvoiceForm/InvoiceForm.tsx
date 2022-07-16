import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../App.scss";
import closeIcon from "../../assets/icon/icon-close.svg";

interface InvoiceValues {
  invoiceNumber: number;
  invoiceDate: number;
  invoiceDue: number;
  item: string;
  hours: string;
  rate: string;
  subtotal: string;
}
interface InvoiceTableValues {
  item: string;
  hours: string;
  rate: string;
  subtotal: number | string;
}

function InvoiceItem() {
  let dateNow = new Date().toISOString().split("T")[0];

  const [tableFields, setTableFields] = useState([
    { item: "", hours: "", rate: "", subtotal: "" },
  ]);

  function addInvoiceItem() {
    setTableFields([
      ...tableFields,
      {
        item: "",
        hours: "",
        rate: "",
        subtotal: "",
      },
    ]);
  }
  function deleteLastItem() {
    setTableFields(tableFields.slice(0, -1));
  }

  function removeTableItem(index: any) {
    const rows = [...tableFields];
    rows.splice(index, 1);
    setTableFields(rows);
  }

  function handleChange(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;
    const list: any = [...tableFields];
    list[index][name] = value;
    setTableFields(list);
  }

  function submitInvoiceItem(data: any) {
    console.log(JSON.stringify(tableFields));
    console.log(JSON.stringify(data))

  }

  const { register, handleSubmit } = useForm();

  return (
    <div className="invoice-wrapper__form-card">
      <h3 className="invoice-title__from">Invoice info</h3>
      <div className="invoice-info">
        <form onSubmit={handleSubmit(submitInvoiceItem)}>
          <div className="invoice-input__text">
            <label>Invoice Number:</label>
            <input
              type="text"
              required
              title="Click to change number"
              placeholder="001"
              {...register("invoiceNumber", { required: true })}
            />
          </div>
          <div className="invoice-input__date">
            <label>Invoice Date:</label>
            <input
              type="date"
              required
              title="Click to change date"
              placeholder={dateNow}
              {...register("invoiceDate", { required: true })}
            />
          </div>
          <div className="invoice-input__date">
            <label>Due:</label>
            <input
              type="date"
              required
              title="Click to change date"
              placeholder={dateNow}
              {...register("invoiceDue", { required: true })}
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
                {tableFields.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="invoice-input__text">
                          <input
                            type="text"
                            required
                            value={data.item || ""}
                            title="Click to change number"
                            placeholder="Set up ads"
                            name="item"
                            onChange={(event) => handleChange(index, event)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="invoice-input__text">
                          <input
                            type="text"
                            required
                            value={data.hours || ""}
                            title="Click to change number"
                            placeholder="3h"
                            name="hours"
                            onChange={(event) => handleChange(index, event)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="invoice-input__text">
                          <input
                            type="text"
                            required
                            value={data.rate || ""}
                            title="Click to change number"
                            placeholder="10$"
                            name="rate"
                            onChange={(event) => handleChange(index, event)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="invoice-input__text">
                          <input
                            type="text"
                            required
                            readOnly
                            value={data.subtotal = (parseInt(data.rate) * parseInt(data.hours)) || "" }
                            title="Click to change number"
                            placeholder="30$"
                            name="subtotal"
                            onChange={(event) => handleChange(index, event)}
                          />
                        </div>
                      </td>
                      {tableFields.length >= 2 ? (
                        <td>
                          <button
                            onClick={removeTableItem}
                            className="btn-remove"
                          >
                            <img src={closeIcon} />
                          </button>
                        </td>
                      ) : (
                        <td></td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {tableFields.length >= 2 ? (
              <button
                className="button-style btn-delete"
                onClick={deleteLastItem}
              >
                Delete Last Item
              </button>
            ) : (
              <div></div>
            )}
            <div>
              <button className="button-style" onClick={addInvoiceItem}>
                Add New Invoice Item
              </button>
            </div>
            <button className="button-style" type="submit">
              Submit Invoice Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvoiceItem;
