import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../../App.scss";
import './FormFrom.scss';

function FormFrom(props) {
  const [selectFile, setSelectFile] = useState<File | undefined>();
  const [previewFile, setPreviewFile] = useState<string | undefined>();

  useEffect(() => {
    if (!selectFile) {
      setPreviewFile(undefined);
      return;
    }
    const blobUrl: string | undefined = URL.createObjectURL(selectFile);
    setPreviewFile(blobUrl);
    return () => URL.revokeObjectURL(blobUrl);
  }, [selectFile]);

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectFile(undefined);
      return;
    }
    setSelectFile(event.target.files[0]);
  };

  const { register, handleSubmit } = useForm();

  function submitInvoiceFrom(data: any) {
    console.log(JSON.stringify(data));
  }

  if(!props.showFrom){
    return null
  }
  return (
    <div className="modal">
    <div className="invoice-wrapper__form-card-modal">
      <div className="invoice-title__wrapper">
        <h3 className="invoice-title__from">From</h3>
        <button className="invoice-title__btn" onClick={props.onClose}>x</button>
      </div>
      <form onSubmit={handleSubmit(submitInvoiceFrom)}>
        <div className="invoice-input__file">
          {previewFile ? (
            <img src={previewFile} />
          ) : (
            <label className="invoice-label">
              <div className="invoice-btn__logo">
                Select
                <input type="file" id="fileupload" onChange={onSelectFile} />
              </div>
              &nbsp;your logo
            </label>
          )}
        </div>
        <div className="invoice-input__text">
          <label>Company/ Client Name</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClientCompany", { required: true })}
          />
        </div>
        <div className="invoice-input__text">
          <label>Country</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClinentCountry", { required: true })}
          />
        </div>
        <div className="invoice-input__text">
          <label>First Name</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClientFirstName", { required: true })}
          />
        </div>
        <div className="invoice-input__text">
          <label>Last Name</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClientLastName", { required: true })}
          />
        </div>
        <div className="invoice-input__text">
          <label>Tax registration number</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClientTaxNumber", { required: true })}
          />
        </div>
        <div className="invoice-input__text">
          <label>Email</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClientEmail", { required: true })}
          />
        </div>
        <div className="invoice-input__text">
          <label>Address</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClientAddress", { required: true })}
          />
        </div>
        <div className="invoice-input__text">
          <label>Phone</label>
          <input
            type="text"
            autoComplete="off"
            required
            {...register("invoiceClientPhone", { required: true })}
          />
        </div>
        <div className="invoice-button__submit">
          <button type="submit">Set Sender Details</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default FormFrom;
