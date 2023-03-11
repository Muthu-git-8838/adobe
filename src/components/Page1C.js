import axios from "axios";
import React, { useState, useEffect } from "react";
import doc from "../files/form.pdf";

const Page1C = () => {
  const [accessToken, setAccessToken] = useState(
    "3AAABLblqZhAArYqwuT4ah1s1ERuh0guwAoy9iiap36v0kbMhu83_ulsab0w3Y2y0TEApNWo_qUJ2shDvwcWGBgXXGwLyKC0a"
  );
  const file = doc ;
 
  const API_BASE_URL = "https://api.echosign.com/api/v2/rest";
  // Send document for signature
  const sendDocumentForSignature = async () => {
    const formData = new FormData()
    formData.append("File",file , "form.pdf")
    const response = await fetch(`${API_BASE_URL}/transientDocuments`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Token": accessToken,
      },
      body: {
       formData
      },

      // Add your file here as a FormData object
    });

    if (response.ok) {
      const data = await response.json();
      const documentId = data.transientDocumentId;

      const agreementResponse = await fetch(`${API_BASE_URL}/agreements`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": accessToken,
        },
        body: JSON.stringify({
          name: "My Agreement",
          signatureType: "ESIGN",
          participantSetsInfo: [
            {
              participantSetRole: "SIGNER",
              memberInfos: [
                {
                  email: "muthumani8838.elonnative@gmail.com",
                },
              ],
            },
            {
              participantSetRole: "SIGNER",
              memberInfos: [
                {
                  email: "apecgpmani@gmail.com",
                },
              ],
            },
          ],
          fileInfos: [
            {
              libraryDocumentId: documentId,
            },
          ],
        }),
      });

      if (agreementResponse.ok) {
        alert("Agreement sent for signature");
        console.log("Agreement sent for signature");
      } else {
        alert("Failed to send agreement for signature");
        console.error("Failed to send agreement for signature");
      }
    } else {
      alert("Failed to upload file");
      console.error("Failed to upload file");
    }
  };

  return (
    <div>
      <button onClick={sendDocumentForSignature}>
        Send document for signature
      </button>
    </div>
  );
};

export default Page1C;

