import { useEffect, useState } from "react";
import verify from "../etc/verify.jsx";
import { tokenVault, BaseEndpoint } from "../etc/network.jsx";
import Cookies from 'js-cookie';
import { TailSpin } from 'react-loader-spinner'; // Assuming you're using TailSpin from this package

export default function Logout() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    verify(setIsVerified);
  }, []);

  useEffect(() => {
    if (isVerified) {
      const TOKEN = Cookies.get(tokenVault);
      if (TOKEN) {
        fetch(`${BaseEndpoint}/auth/signout`, {
          method: 'POST',
          headers: {
            'Pass': `${btoa(TOKEN)}`,
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            Cookies.remove(tokenVault);
            window.location.href = "/login";
          }
        })
        .catch((error) => {
          return ""
        });
      } else {
        window.location.href = "/login";
      }
    }
  }, [isVerified]);

  if (!isVerified) {
    return (
      <div id="loader-container">
        <TailSpin height="20" width="20" color="#fff" />
      </div>
    );
  }

  return null;
}
