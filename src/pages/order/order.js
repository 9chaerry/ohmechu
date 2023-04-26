import { createHeader } from '/src/default_layout/header.js';
import { createFooter } from '/src/default_layout/footer.js';
import { execDaumPostcode } from '/src/modules/orderModules/inputUserAddress.js';
import { orderListTemplate } from '/src/modules/orderModules/userOrderList.js';
import { priceSetting } from '/src/modules/orderModules/goodsTotalPrice.js';
import { sendShippingData } from '/src/modules/orderModules/userShippingInput.js';
import { autoHyphen } from '/src/modules/sign_upModules/autoHyphenPhoneNumber.js';

// document.addEventListener('DOMContentLoaded', blockAccess);
document.addEventListener('DOMContentLoaded', createHeader);
document.addEventListener('DOMContentLoaded', createFooter);
document.addEventListener('DOMContentLoaded', orderListTemplate);
document.addEventListener('DOMContentLoaded', priceSetting);

document
  .getElementById('getuserAddress')
  .addEventListener('click', execDaumPostcode);
document
  .getElementById('orderComplete')
  .addEventListener('click', sendShippingData);
document
  .getElementById('user-phone-number')
  .addEventListener('input', autoHyphen);
