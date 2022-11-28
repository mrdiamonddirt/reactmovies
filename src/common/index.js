export function writeCookie (key, value, days) {
  let expires = '';

  days = days || 365;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  const cookie = document.cookie = key + '=' + (value || '') + expires + '; path=/';
  console.log(cookie)

  return cookie;
}

export function readCookie (cookiename) {
    const name = cookiename + '='
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie)
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return false;
}