import { createHeader } from '../../default_layout/header.js';
import { createFooter } from '../../default_layout/footer.js';
import { addCart } from '../../modules/itemDetail/itemDetail.js';

const addCartBtn = document.getElementById('order-product');

document.addEventListener('DOMContentLoaded', createHeader);
document.addEventListener('DOMContentLoaded', createFooter);

addCartBtn.addEventListener('click', addCart);
