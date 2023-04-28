import { listSetting } from './listSetting.js';

const categoryButtons = document.getElementsByClassName('category-button');
const categoryTitle = document.getElementById('category-title');

function categorySetting() {
  for (let button of categoryButtons)
    button.addEventListener('click', categoryClick);
}

function categoryClick(e) {
  // 기본 액션을 제거합니다.
  e.preventDefault();
  e.stopPropagation();

  // 카테고리에 맞게 리스트를 재 생성합니다.
  const categoryTitleString = this.innerText;
  const category = this.dataset.category;

  categoryTitle.innerText = categoryTitleString;
  listSetting(category);
}

export { categorySetting };
