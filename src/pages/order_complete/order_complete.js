import { createHeader } from '/src/default_layout/header.js';
import { createFooter } from '/src/default_layout/footer.js';
import { getOrderId } from '/src/modules/order_completeModules/getOrderId';
import { getReceiverProfile } from '/src/modules/order_completeModules/getReceiverProfile';
import { getOrderPrice } from '/src/modules/order_completeModules/getOrderPrice';
import { checkOrder } from '/src/modules/order_completeModules/checkMyOrder';

document.addEventListener('DOMContentLoaded', createHeader);
document.addEventListener('DOMContentLoaded', createFooter);
document.addEventListener('DOMContentLoaded', getOrderId);
document.addEventListener('DOMContentLoaded', getReceiverProfile);
document.addEventListener('DOMContentLoaded', getOrderPrice);
document.getElementById('check-order').addEventListener('click', checkOrder);
