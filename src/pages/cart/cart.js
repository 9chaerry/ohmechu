import { createHeader } from '/src/default_layout/header.js';
import { createFooter } from '/src/default_layout/footer.js';
// import { cartLoad } from '../../../Cart/cartModules/cartLoad.js';

window.onload = () => {
  createHeader();
  createFooter();
  cartLoad();
};
