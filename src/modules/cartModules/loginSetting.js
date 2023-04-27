import * as Token from '/src/modules/api_methodModules/Token.js';

const loginBox = document.getElementById('login-box');

function loginBoxSetup() {
  if (Token.getToken()) {
    loginBox.innerHTML = '';
    loginBox.classList.remove('border');
  }
}

export { loginBoxSetup };
