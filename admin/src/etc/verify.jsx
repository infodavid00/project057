import { tokenVault, BaseEndpoint } from "./network.jsx";
import Cookies from 'js-cookie';

export default async function verify(state) {
  const TOKEN = Cookies.get(tokenVault);
  if (TOKEN) {
    try {
      const response = await fetch(`${BaseEndpoint}/verify`, {
        method: 'GET',
        headers: {
          'Pass': `${btoa(TOKEN)}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        state(true);
      } else window.location.href = "/login";
    } catch (error) {
      window.location.href = "/login";
    }
  } else window.location.href = "/login";
}
