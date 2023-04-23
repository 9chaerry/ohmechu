import { createHeader } from '/src/Default-Layout/header.js';
import { createFooter } from '/src/Default-Layout/footer.js';
import { cartLoad } from './cartModules/cartLoad.js';

window.onload = () => {
  createHeader();
  createFooter();
  cartLoad();
};
