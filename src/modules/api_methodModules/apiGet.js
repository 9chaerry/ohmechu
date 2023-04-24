async function getApi(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP가 응답하지 않습니다. Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`오류: ${error}`);
  }
}

const url = 'url경로';
getApi(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
