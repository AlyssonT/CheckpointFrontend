export function setToken(token: string | undefined) {
  if (token === undefined) {
    localStorage.removeItem("token");
    return;
  }
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function isAuthenticated() {
  return !!getToken();
}
