function getOrderId() {
  const order = JSON.parse(window.localStorage.getItem('order'));
  const orderIdContainer = document.getElementById('order-id');

  orderIdContainer.innerText = `${order._id}`;
}
export { getOrderId };
