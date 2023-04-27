function checkOrder(e) {
  e.stopPropagation();
  const isLoggedIn = false;
  if (isLoggedIn) {
    window.location.href = '/src/pages/order_list/order_list.html';
  } else {
    window.location.href = '/src/pages/login/login.html';
  }
}

export { checkOrder };
