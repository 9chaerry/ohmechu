import { createHeader } from '../../default_layout/header.js';
import { createFooter } from '../../default_layout/footer.js';
import { addCart } from '../../modules/itemDetail/addCart.js';
// import { itemDetail } from '../../modules/itemDetail/itemDetail.js';
import { setParams } from '../../modules/itemDetail/itemDetail.js';
// import { listToDetail } from '../category/category.js';

document.addEventListener('DOMContentLoaded', createHeader);
document.addEventListener('DOMContentLoaded', createFooter);
document.addEventListener('DOMContentLoaded', addCart);
// document.addEventListener('DOMContentLoaded', itemDetail);
document.addEventListener('DOMContentLoaded', setParams);
