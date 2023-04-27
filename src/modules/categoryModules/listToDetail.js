import * as Fetcher from '../../modules/api_methodModules/Fetcher.js';

/**
 * PROCESS
 * 이미지 클릭
 * 클릭상품 id값 통해 URL => ~~~?productId=135155t 변경
 * searchParams 통해 /products/${productId} 값 가져와서 DB 접근
 * 해당 상품 정보 가져오기
 */

// const imgTag = document.getElementsByTagName('img')[0];

const productImg = document.getElementsByClassName('product-img');
// console.log(productImg);

export function moveToDetail() {
  for (let list of productImg) {
    list.addEventListener('click', listToDetail);
  }
}

async function listToDetail(e) {
  e.preventDefault();
  e.stopPropagation();
  // console.log(e);

  const url = new URL(e.target.src);
  const currentPath = url.href;
  console.log(url);

  const allProducts = await Fetcher.getAllProducts();
  console.log(allProducts);

  const targetProduct = allProducts.filter(
    (product) => product.img === currentPath
  )[0];

  // const response = await getItemId();
  console.log(targetProduct);

  const productId = targetProduct._id;
  // const newUrl = new URL(window.location.href);

  const productInfo = await Fetcher.getIdProduct(productId);
  // console.log(productInfo);
  // const productDetail = await Fetcher.getIdProduct(productInfo._id);

  if (currentPath === targetProduct.img) {
    const newUrl = new URL('http://127.0.0.1:5501/src/pages/goods/goods.html');
    newUrl.searchParams.set('productId', productInfo._id);
    window.location.href = newUrl;
  } else {
    alert('해당 상품이 존재하지 않습니다.');
    return;
  }
}
