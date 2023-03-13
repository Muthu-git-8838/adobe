import React, { useState } from "react";

const TripleAgreement = (props) => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [email3, setEmail3] = useState("");
  const [name, setName] = useState("");
  const [apiData, setApiData] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("x-api-user", "email:raj@visacare.net");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer 3AAABLblqZhAYcIZGkHS15_KLtFqXgJzj_6RYNtnQzPDfADIhrnoPg9WFkRDIwBc58CVnb41OmzQTdyWAvsGrbpFcRNPxRDXt"
  );

  var raw = JSON.stringify({
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
            email: email1,
          },
        ],
        order: 1,
        role: "SIGNER",
      },
      {
        memberInfos: [
          {
            email: email2,
          },
        ],
        order: 1,
        role: "SIGNER",
      },
      {
        memberInfos: [
          {
            email: email3,
          },
        ],
        order: 1,
        role: "SIGNER",
      },
    ],
    signatureType: "ESIGN",
    externalId: {
      id: "NA2Account_1678337368",
    },
    state: "IN_PROCESS",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const handleSendAgreement = async () => {
    await fetch(
      "https://api.na4.adobesign.com/api/rest/v6/agreements",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className={props.able ? "btn btn-danger mx-1" : "btn btn-dark mx-1"}
          disabled={props.able}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal4"
        >
          Enter Recpt. E-mail
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal4"
          tabIndex={-1}
          aria-labelledby="exampleModalLabe5"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id="exampleModalLabe5">
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
                  <div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        value={email1}
                        onChange={(e) => {
                          setEmail1(e.target.value);
                        }}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">1st Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        value={email2}
                        onChange={(e) => {
                          setEmail2(e.target.value);
                        }}
                        className="form-control"
                        id="floatingInput2"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput2">2nd Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        value={email3}
                        onChange={(e) => {
                          setEmail3(e.target.value);
                        }}
                        className="form-control"
                        id="floatingInput3"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput3">3rd Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="form-control"
                        id="floatingname"
                        placeholder="name"
                      />
                      <label htmlFor="floatingname">Document Name</label>
                    </div>
                  </div>

                  <button
                    className={
                      email1 === "" ||
                      email2 === "" ||
                      email3 === "" ||
                      name === ""
                        ? "btn btn-danger my-2"
                        : "btn btn-success my-2"
                    }
                    onClick={handleSendAgreement}
                    disabled={
                      email1 === "" ||
                      email2 === "" ||
                      email3 === "" ||
                      name === ""
                        ? true
                        : false
                    }
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

export default TripleAgreement;
