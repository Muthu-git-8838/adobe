// import { React, useState, useEffect } from "react";
// import axios from "axios";

// const Document = () => {
//   const [apiData, setApiData] = useState([]);
//   const [accessToken, setAccessToken] = useState(null);

//   const getApi = async () => {
//     await axios
//       .get("API_GET_URL_HERE")
//       .then((response) => {
//         setApiData(response.data);
//         console.log(apiData);
//         setAccessToken(apiData.access_token);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSubmit = async () => {
//     await axios
//       .post("API_POST_URL_HERE", { PARAMS_HERE })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     getApi();
//   }, []);
//   return (
//     <div>
//       <button className="btn m-5 btn-secondary" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Document;

import React from "react";
import axios from "axios";
const Document = () => {
  const getToken = async () => {
    const clientId = "CBJCHBCAABAA2A5gBFEHHVG5FQls21xLdwoPId7orV4L";
    const clientSecret = "lh91qfu8R81MIjifj1zGaNNNBFEwql4G";
    const redirectUri = "https://oauth.pstmn.io/v2/browser-callback";
    const refreshToken =
      "3AAABLblqZhBpCf0QsW4EfIBXBMysjAutpc3HqzrLr1HYFTi7olzczZko-Z4rqFLICym_kSV8wic";

    const url = "https://api.echosign.com/oauth/v2/refresh";
    const data = {
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      redirect_uri: redirectUri,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const response = await axios.post(url, new URLSearchParams(data), config);
      const accessToken = response.data.access_token;
      console.log(accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="btn btn-secondary m-5" onClick={getToken}>
        Get_ACCES_TOKEN
      </button>
    </div>
  );
};

export default Document;
