/**
 * 토큰 값으로 쿠키에 'token'이라는 이름으로 쿠키를 저장합니다.
 * @param {String} tokenValue
 */
function setToken(tokenValue) {
  document.cookie = `accessToken=${tokenValue}; path=/`;
}

/**
 * 쿠키에 저장된 토큰 값을 반환합니다. 토큰이 없다면 undefined을 반환합니다.
 * @returns String OR undefined
 */
function getToken() {
  const cookieList = document.cookie.split('; ');
  const cookies = {};

  for (let cookie of cookieList) {
    const [cookieKey, cookieValue] = cookie.split('=');
    cookies[cookieKey] = cookieValue;
  }

  return cookies.accessToken;
}

/**
 * 토큰 쿠키를 삭제합니다.
 */
function removeToken() {
  document.cookie =
    'accessToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
}

export { setToken, getToken, removeToken };
