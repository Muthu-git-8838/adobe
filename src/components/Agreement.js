import React, { useState } from "react";
import axios from "axios";

const AgreementSender = (props) => {
  const access_token =
    "3AAABLblqZhB2xoYgFtdaUVbZwDq7_dibmbZ62w2TAI9YC2h-2XT35_6RJiWLQoBXQ75jdBpsTippPvIxBV3B1vSr3haRNSwe";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [apiData, setApiData] = useState([]);

  const handleSendAgreement = async () => {
    var data = JSON.stringify({
      fileInfos: [
        {
          transientDocumentId: props.id,
        },
      ],
      name: name,
      participantSetsInfo: [
        {
          memberInfos: [
            {
              email: email,
            },
          ],
          order: 1,
          role: "SIGNER",
        },
      ],
      signatureType: "ESIGN",
      externalId: {
        id: "12345",
      },
      state: "IN_PROCESS",
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.na4.adobesign.com/api/rest/v6/agreements",
      headers: {
        "x-api-user": "email:raj@visacare.net",
        "Content-Type": "application/json",
        AUTHORIZATION: `Bearer 3AAABLblqZhAYcIZGkHS15_KLtFqXgJzj_6RYNtnQzPDfADIhrnoPg9WFkRDIwBc58CVnb41OmzQTdyWAvsGrbpFcRNPxRDXt`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        console.log(JSON.stringify(response.data));
        setApiData(JSON.stringify(response.data));
        alert("Successfully Sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {/* <button onClick={handleSendAgreement} className="btn btn-warning mt-1" disabled={props.dis}>Send For Sign</button> */}
      {/* Button trigger modal */}

      <div>
        <button
          type="button"
          className={
            props.able ? "btn btn-danger mx-1" : "btn btn-primary mx-1"
          }
          disabled={props.able}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Enter Recpt. E-mail
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex={-1}
          aria-labelledby="exampleModalLabe3"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id="exampleModalLabe3">
                  Recepient Details
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  {/* <label htmlFor="email" className="form-coontrol">
                    Enter The Recepient E-mail :
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    className="form-control"
                    placeholder="Enter E-mail here . . "
                  />
                  <label htmlFor="type" className="form-coontrol">
                    Give The Document Type :
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="type"
                    className="form-control"
                    placeholder="E.g) agreement "
                  /> */}
                  <div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="form-control"
                        id="floatingInput"
                        placeholder="|"
                      />
                      <label htmlFor="floatingInput">Recepient Email</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="|"
                      />
                      <label htmlFor="floatingPassword">Document Name</label>
                    </div>
                  </div>

                  <button
                    className={
                      email === "" || name === ""
                        ? "btn btn-danger my-2"
                        : "btn btn-success my-2"
                    }
                    onClick={handleSendAgreement}
                    disabled={email === "" || name === "" ? true : false}
                  >
                    Send For Sign
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* {apiData.data && <h2>SuccessFully Sent . . . </h2>} */}
        </div>
      </div>
    </div>
  );
};

export default AgreementSender;
