const userlogin = document.getElementById('userlogin');
userlogin.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(userlogin);

  const res = await fetch('경로', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  });

  if (res.ok) {
    // const result = await res.json();
    console.log('성공시 반환');
    resolve();
  } else {
    if (res.status === 401) {
      console.log('인증 실패');
    } else if (res.status === 404) {
      console.log('요청한 리소스를 찾을 수 없음');
    } else {
      console.log('먼가먼가임;');
    }
  }
});
