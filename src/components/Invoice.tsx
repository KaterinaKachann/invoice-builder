import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import "./Invoice.scss";
import closeIcon from "../assets/icon/icon-close.svg";
type FormItem = {
  ItemSet: string;
  ItemHour: number;
  ItemRate: number;
  ItemSubtotal: number;
};
type FormData = {
  InvoiceNumber: number;
  InvoiceDate: Date;
  InvoiceDue: Date;
  InvoiceItems: Array<FormItem>;
};
function Invoice() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormData>({
    mode: "all",
  });

  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "InvoiceItems",
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);
  };

  let dateNow = new Date().toISOString().split("T")[0];

  const [tableFields, setTableFields] = useState([
    { item: "", hours: "", rate: "", subtotal: "" },
  ]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const list: any = [...tableFields];
    list[index][name] = value;
    setTableFields(list);
  };
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
              {...register("InvoiceNumber", {
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
              className={errors.InvoiceNumber ? "errorMsg" : "customField"}
            />
            {errors.InvoiceNumber ? (
              <span className="errorBar">{errors.InvoiceNumber.message}</span>
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
              {...register("InvoiceDate", {
                required: { value: true, message: "Fieled is empty" },
              })}
              className={errors.InvoiceNumber ? "errorMsg" : "customField"}
            />
            {errors.InvoiceDate ? (
              <span className="errorBar">{errors.InvoiceDate.message}</span>
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
              {...register("InvoiceDue", {
                required: { value: true, message: "Fieled is empty" },
              })}
              className={errors.InvoiceNumber ? "errorMsg" : "customField"}
            />
            {errors.InvoiceDue ? (
              <span className="errorBar">{errors.InvoiceDue.message}</span>
            ) : (
              <span className="bar"></span>
            )}
          </div>

          <div className="invoice-table">
            {fields.length == 0 ? (
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
                  {fields.map((field, index) => {
                    return (
                      <tr key={field.id}>
                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              title="Click to change number"
                              placeholder="Set up ads"
                              {...register(`InvoiceItems.${index}.ItemSet`)}
                              className="customField"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              title="Click to change number"
                              placeholder="3h"
                              {...register(`InvoiceItems.${index}.ItemHour`)}
                              className="customField"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              title="Click to change number"
                              placeholder="10$"
                              {...register(`InvoiceItems.${index}.ItemRate`)}
                              className="customField"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="invoice-input__text">
                            <input
                              type="text"
                              readOnly
                              title="Click to change number"
                              placeholder="30$"
                              {...register(
                                `InvoiceItems.${index}.ItemSubtotal`
                              )}
                              value={
                                (field.ItemSubtotal =
                                  +field.ItemHour * +field.ItemRate || 0)
                              }
                              className="customField"
                            />
                          </div>
                        </td>
                        {fields.length >= 2 ? (
                          <td>
                            <button
                              onClick={() => remove(index)}
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
            <button
              className="button-style"
              onClick={() =>
                append({
                  ItemSet: "",
                  ItemHour: undefined,
                  ItemRate: undefined,
                  ItemSubtotal: undefined,
                })
              }
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
