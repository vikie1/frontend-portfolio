/*this hook will be used to fetch cookies*/
export const useCookies = (cookieName) => {
    if (!document.cookie) {
        return null;
      }
      const csrfCookie = document.cookie
        .split(";")
        .map((c) => c.trim())
        .filter((c) => c.startsWith(cookieName + "="));
      if (csrfCookie.length === 0) {
        return null;
      }
    return decodeURIComponent(csrfCookie[0].split("=")[1]);
}