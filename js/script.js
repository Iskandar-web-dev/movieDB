/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1 
let promo = document.querySelector('.promo__adv')
promo.innerHTML = ''
/////////////////////////////////////////////////////////////////////////
//2
let genre = document.querySelector('.promo__genre')
genre.innerHTML = 'Драма'
///////////////////////////////////////////////////////////////////////// 
//3
let promo_content = document.querySelector('.promo__bg')
console.log(promo_content);
promo_content.style.background = `url('./img/bg.jpg')`
///////////////////////////////////////////////////////////////////////// 
//delete
let promo__interactive_item = document.querySelectorAll('.promo__interactive-item')
let del = document.querySelectorAll('.delete')

del.forEach(deletee => deletee.onclick = () => deletee.parentNode.remove())
///////////////////////////////////////////////////////////////////////////////////
//active
let promo__menu_item = document.querySelectorAll('.promo__menu-item')

promo__menu_item.forEach(i => {
    i.onclick = () => {
        promo__menu_item.forEach(el => el.classList.remove('promo__menu-item_active'))
        i.classList.add('promo__menu-item_active')
    }
})