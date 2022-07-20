import React, { useEffect, useState } from "react";
import "../../App.scss";

function FormFrom() {
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

  function onSelectFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectFile(undefined);
      return;
    }
    setSelectFile(event.target.files[0]);
  }

  return (
    <div className="invoice-wrapper__form-card">
      <h3 className="invoice-title__from">From</h3>
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
  );
}

export default FormFrom;
