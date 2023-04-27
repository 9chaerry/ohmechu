import { joinUser } from '/src/modules/api_methodModules/Fetcher.js';

async function postUserSignup(e) {
  e.stopPropagation();
  e.preventDefault();
  const signUpId = document.getElementById('userId').value;
  const signUpPassword = document.getElementById('user-PasswordCheck').value;
  const signUpName = document.getElementById('userName').value;
  const signUpGender = document.getElementById('userGender').value;
  const signUpPhoneNumber = document.getElementById('user-phone-number').value;
  const signUpBirthDate = document.getElementById('birthdate').value;
  const postcode = document.getElementById('postcode').value;
  const roadAddress = document.getElementById('roadAddress').value;
  const detailAddress = document.getElementById('detailAddress').value;
  const extraAddress = document.getElementById('extraAddress').value;

  const user_address = {
    우편번호: postcode,
    도로명주소: roadAddress,
    상세주소: detailAddress,
    참고사항: extraAddress,
  };

  const data = {
    userName: signUpName,
    password: signUpPassword,
    email: signUpId,
    gender: signUpGender,
    phoneNumber: signUpPhoneNumber,
    birth: signUpBirthDate,
    address: user_address,
  };
  try {
    const response = await joinUser(data);
    console.log(response);
    if (response === 409) {
      alert('이미 등록된 회원입니다.');
    } else if (response && response._id) {
      // const orderId = response._id;
      // const newUrl = `/src/pages/main/index.html`;
      window.location.href = '/src/pages/main/index.html';
    }
  } catch (error) {
    console.error('백엔드로 전송 실패', error);
    alert('회원가입이 실패했습니다.');
  }
}

export { postUserSignup };
