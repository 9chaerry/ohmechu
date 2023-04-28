export function resetReceiverProfile() {
  const receiver = {
    name: document.getElementById('receiver-name').value,
    phoneNumber: document.getElementById('receiver-phone-number').value,
    postcode: document.getElementById('postcode').value,
    roadAddress: document.getElementById('roadAddress').value,
    detailAddress: document.getElementById('detailAddress').value,
    extraAddress: document.getElementById('extraAddress').value,
    request: document.getElementById('userRequest').value,
  };
  receiver.name = '';
  receiver.phoneNumber = '';
  receiver.postcode = '';
  receiver.roadAddress = '';
  receiver.detailAddress = '';
  receiver.extraAddress = '';
}
