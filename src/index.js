// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


import menu from "./menu.json"

const refs = {
  cardList: document.querySelector('.menu'),
  
};

function createItems(menu) {
  return menu.map(({ image, description, name, price, ingredients }) => {
    return `<li class="menu__item">
  <article class="card">
    <img
src="${image}"
      alt="${name}"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        "${price}"кредитов
      </p>
      <p class="card__descr">"${description}
      </p>
<ul class="tag-list">
        ${ingredients.map((ingredient) => {
      return `<li>"${ingredient}"</li>`
    }).join('')}

      </ul>
    </div>

<button class="card__button button">
          В корзину
    </button>
  </article>
</li>
`
  }).join('');
}

refs.cardList.innerHTML = createItems(menu);




