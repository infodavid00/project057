import { tokenVault, BaseEndpoint } from "../etc/network.jsx";
import Cookies from 'js-cookie';

export default async function Logout() {
  const TOKEN = Cookies.get(tokenVault);
  if (TOKEN) {
    try {
      const response = await fetch(`${BaseEndpoint}/auth/signout`, {
        method: 'POST',
        headers: {
          'Pass': `${btoa(TOKEN)}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        Cookies.remove(tokenVault);
        window.location.href = "/signin";
      } else return "";
    } catch (error) {
      return "";
    }
  } else window.location.href = "/signin";
}
