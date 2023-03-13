// import React, { useState } from 'react';
// import axios from 'axios';
// import AgreementSender from './Agreement';

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [transientDocId, setTransientDocId] = useState(null);

//   const handleSelectFile = async () => {
//     const filePath = 'C://Users/ADMIN/Documents/Agreement_Sign_Testing.pdf';
//     //const filePath = './files/form.pdf';
//     const newFile = await getFileFromPath(filePath);
//     setFile(newFile);
//   };

//   // const getFileFromPath = (filePath) => {
//   //   console.log("result");
//   //   return new Promise((resolve, reject) => {
//   //     const reader = new FileReader();
//   //     reader.onload = () => {
//   //       const file = new File([reader.result], filePath.split('/').pop(), { type: 'application/pdf' });
//   //       console.log("result1",file);
//   //       resolve(file);

//   //     };
//   //     reader.onerror = () => {
//   //       reject(new Error('Failed to read file'));
//   //     };
//   //     reader.readAsArrayBuffer(new Blob([filePath], { type: 'application/octet-stream' }));
//   //   });
//   // };
//   const getFileFromPath = (filePath) => {
//     console.log("result");
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', filePath, true);
//       xhr.responseType = 'blob';
//       xhr.onload = () => {
//         if (xhr.status === 200) {
//           const fileName = filePath.split('/').pop();
//           const contentType = xhr.getResponseHeader('content-type');
//           const file = new File([xhr.response], fileName, { type: contentType });
//           console.log("result1",file);
//           resolve(file);
//         } else {
//           reject(new Error('Failed to read file'));
//         }
//       };
//       xhr.onerror = () => {
//         reject(new Error('Failed to read file'));
//       };
//       xhr.send();
//     });
//   };

//   const handleUploadFile = () => {
//     const access_token = '3AAABLblqZhB2xoYgFtdaUVbZwDq7_dibmbZ62w2TAI9YC2h-2XT35_6RJiWLQoBXQ75jdBpsTippPvIxBV3B1vSr3haRNSwe';

//     const formData = new FormData();
//     formData.append('File', file, 'Agreement_Sign_Testing.pdf');
//     axios.post('https://api.na4.adobesign.com/api/rest/v6/transientDocuments', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'AUTHORIZATION': `Bearer ${access_token}`
//       }
//     }).then(response => {
//         console.log(response)
//       setTransientDocId(response.data.transientDocumentId);
//       alert(response.data.transientDocumentId)
//     }).catch(error => {
//       console.error(error);
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleSelectFile}>Select this File</button>
//       <button onClick={handleUploadFile} disabled={!file}>Confirm</button>
//       {/* {transientDocId && <p>Transient Document ID: {transientDocId}</p>} */}
//         <AgreementSender id = {transientDocId} />
//     </div>
//   );
// }
//  export default FileUpload;
import React, { useState } from "react";
import axios from "axios";
import AgreementSender from "./Agreement";
import TripleAgreement from "./TripleAgreement";
import DoubleAgreement from "./DoubleAgreement";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [transientDocId, setTransientDocId] = useState(null);
  const [error, setError] = useState(null);

  const options = [
    { value: "null", label: "Number Of Recepient" },
    { value: "single", label: "Single Recepient" },
    { value: "double", label: "Double Recepient" },
    { value: "triple", label: "Triple Recepient" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectFile = (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
  };
  const handleUploadFile = async () => {
    const access_token =
      "3AAABLblqZhB2xoYgFtdaUVbZwDq7_dibmbZ62w2TAI9YC2h-2XT35_6RJiWLQoBXQ75jdBpsTippPvIxBV3B1vSr3haRNSwe";

    try {
      const formData = new FormData();
      formData.append("File", file, file.name);
      const response = await axios.post(
        "https://api.na4.adobesign.com/api/rest/v6/transientDocuments",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            AUTHORIZATION: `Bearer ${access_token}`,
          },
        }
      );
      setTransientDocId(response.data.transientDocumentId);
      alert(
        "Transient DocumentId SuccessFully Created.Please Enter The Recipient Email"
      );
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to upload file");
    }
  };

  return (
    <div className="d-flex">
      <input
        id="inp"
        type="file"
        onChange={handleSelectFile}
        style={{ display: "none", cursor: "pointer" }}
      />
      <label htmlFor="inp" className="btn btn-secondary">
        Select Document
      </label>
      <button
        onClick={handleUploadFile}
        disabled={!file}
        className={file ? "btn btn-success mx-1" : "btn btn-danger mx-1"}
      >
        Confirm
      </button>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        disabled={!transientDocId}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption === "single" ? (
        <AgreementSender
          id={transientDocId}
          dis={file ? false : true}
          able={!transientDocId ? true : false}
        />
      ) : selectedOption === "triple" ? (
        <TripleAgreement
          id={transientDocId}
          dis={file ? false : true}
          able={!transientDocId ? true : false}
        />
      ) : selectedOption === "double" ? (
        <DoubleAgreement
          id={transientDocId}
          dis={file ? false : true}
          able={!transientDocId ? true : false}
        />
      ) : null}
      {/* <AgreementSender
        id={transientDocId}
        dis={file ? false : true}
        able={!transientDocId ? true : false}
      /> 
      <TripleAgreement
        id={transientDocId}
        dis={file ? false : true}
        able={!transientDocId ? true : false}
      /> */}
    </div>
  );
}

export default FileUpload;
