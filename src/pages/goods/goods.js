import { createHeader } from '../../default_layout/header.js';
import { createFooter } from '../../default_layout/footer.js';
// import { addCart } from '../../modules/itemDetail/addCart.js';
import { setParams } from '../../modules/itemDetail/itemDetail.js';

// const addCartBtn = document.getElementById('order-product');
// console.log(addCartBtn);

document.addEventListener('DOMContentLoaded', createHeader);
document.addEventListener('DOMContentLoaded', createFooter);
document.addEventListener('DOMContentLoaded', setParams);
// document.addEventListener('DOMContentLoaded', addCart);

// addCartBtn.addEventListener('click', addCart);
