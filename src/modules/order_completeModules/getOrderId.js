function getOrderId() {
  const order = window.localStorage.getItem('order');
  const orderIdContainer = document.getElementById('order-id');

  orderIdContainer.innerText = `${order}`;
}
export { getOrderId };
