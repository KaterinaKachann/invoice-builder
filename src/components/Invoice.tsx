import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import "./Invoice.scss";
import closeIcon from "../assets/icon/icon-close.svg";

type FormItem = {
  itemSet: string;
  itemHour: string;
  itemRate: string;
  itemSubtotal: number;
};
type FormData = {
  invoiceNumber: number;
  invoiceDate: Date;
  invoiceDue: Date;
  invoiceItems: Array<FormItem>;
  invoiceTotal: number;
};

function Invoice() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    mode: "all",
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);

    console.log(itemField);
    console.log(total);
    setItemField([]);
    setTotal(0);
    reset();
  };

  let dateNow = new Date().toISOString().split("T")[0];

  let [itemField, setItemField] = useState<FormItem[]>([
    {
      itemSet: "",
      itemHour: "",
      itemRate: "",
      itemSubtotal: 0,
    },
  ]);

  let [total, setTotal] = useState(0);


  let handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list: any = [...itemField];
    list[index][name] = value;
    setItemField(list);
  };

  let removeTableItem = (index: number) => {
    const rows = [...itemField];
    rows.splice(index, 1);
    setItemField(rows);
    setTotal(total - itemField[index].itemSubtotal)
  };

  let addTableItem = () => {
    setItemField([
      ...itemField,
      {
        itemSet: "",
        itemHour: "",
        itemRate: "",
        itemSubtotal: 0,
      },
    ]);
    setTotal(itemField.reduce(
      (n, { itemSubtotal }) => n + itemSubtotal,
      0
    ))
  };
  
  useEffect (() => {
    setTotal(itemField.reduce(
      (n, { itemSubtotal }) => n + itemSubtotal,
      0
    ))
  })
  

  return (
    <div className="invoice-wrapper__form-card">
      <h3 className="invoice-title__from">Invoice info</h3>
      <div className="invoice-info">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="invoice-input__text">
            <label>Invoice Number:</label>
            <input
              type="text"
              title="Click to change number"
              placeholder="001"
              {...register("invoiceNumber", {
                required: { value: true, message: "Fieled is empty" },
                minLength: {
                  value: 3,
                  message: "More longer",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a number",
                },
              })}
              className={errors.invoiceNumber ? "errorMsg" : "customField"}
            />
            {errors.invoiceNumber ? (
              <span className="errorBar">{errors.invoiceNumber.message}</span>
            ) : (
              <span className="bar"></span>
            )}
          </div>
          <div className="invoice-input__date">
            <label>Invoice Date:</label>
            <input
              type="date"
              title="Click to change date"
              placeholder={dateNow}
              {...register("invoiceDate", {
                required: { value: true, message: "Fieled is empty" },
              })}
              className={errors.invoiceNumber ? "errorMsg" : "customField"}
            />
            {errors.invoiceDate ? (
              <span className="errorBar">{errors.invoiceDate.message}</span>
            ) : (
              <span className="bar"></span>
            )}
          </div>
          <div className="invoice-input__date">
            <label>Due:</label>
            <input
              type="date"
              title="Click to change date"
              placeholder={dateNow}
              {...register("invoiceDue", {
                required: { value: true, message: "Fieled is empty" },
              })}
              className={errors.invoiceNumber ? "errorMsg" : "customField"}
            />
            {errors.invoiceDue ? (
              <span className="errorBar">{errors.invoiceDue.message}</span>
            ) : (
              <span className="bar"></span>
            )}
          </div>

          <div className="invoice-table">
            {itemField.length == 0 ? (
              <></>
            ) : (
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
                  {itemField.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              title="Click to change number"
                              placeholder="Set up ads"
                              className="customField"
                              name="itemSet"
                              value={data.itemSet}
                              onChange={(event) => handleChange(event, index)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              title="Click to change number"
                              placeholder="3h"
                              className="customField"
                              name="itemHour"
                              value={data.itemHour || ""}
                              onChange={(event) => handleChange(event, index)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              title="Click to change number"
                              placeholder="10$"
                              className="customField"
                              name="itemRate"
                              value={data.itemRate || ""}
                              onChange={(event) => handleChange(event, index)}
                            />
                          </div>
                        </td>

                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              title="Click to change number"
                              placeholder="10$"
                              readOnly
                              name="itemSubtotal"
                              value={
                                (data.itemSubtotal =
                                  parseInt(data.itemHour) *
                                    parseInt(data.itemRate) || 0)
                              }
                              className="customField"
                            />
                          </div>
                        </td>

                        {itemField.length >= 2 ? (
                          <td>
                            <button
                              onClick={() => removeTableItem(index)}
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
            )}
            <div className="invoice-input__total">
              <label>Total:</label>
              <input
                type="text"
                title="Click to change number"
                readOnly
                placeholder="0"
                name="itemTotal"
                className="customFieldTotal"
                value={(total || 0)}
              />
            </div>
            <button
              className="button-style"
              type="button"
              onClick={addTableItem}
            >
              Add Element
            </button>
          </div>
          <div className="invoice-table">
            <button className="button-style" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Invoice;
