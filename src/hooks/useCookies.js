import { useState, useEffect } from "react";

/*this hook will be used to fetch cookies*/
export const useCookies = (cookieName) => {
  const [cookie, setCookie] = useState(null);
  useEffect(() => {
    if (!document.cookie) {
      console.log(document.cookie);
      return null;
    }
    const csrfCookie = document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((c) => c.startsWith(cookieName + "="));
    if (csrfCookie.length === 0) {
      return null;
    }
    setCookie(prevCookie => decodeURIComponent(csrfCookie[0].split("=")[1]));
  }, [cookieName]);
  return cookie;
};
