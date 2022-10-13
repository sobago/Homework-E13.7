import { xyz } from './index2';
import styles from './style.css';
import but_styles from './button.css';

document.write('Hello - :)');


let butt = document.querySelector('button');

butt.outerHTML = `<button class="${but_styles.normal}">Кнопка</button>`;

window.onClickHandler = () => {
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
    if (button.attributes.class.value === but_styles.normal) {
        button.attributes.class.value = but_styles.disabled;
    } else {
        button.attributes.class.value = but_styles.normal;
    }});
};

onClickHandler();

// document.write('<p>Test hot reload</p>')


async function getPosts(url) {
    let postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '<div id="loading"><div></div><div></div><div></div><div></div></div>';
    document.getElementById('loading').setAttribute('class', styles.lds);
    let resp = await fetch(url);
    postsDiv.innerHTML = '';
    if (resp.ok) {
        let content = await resp.json();
        postsDiv.innerHTML += `<table id="posts-table"></table>`;
        let table = document.getElementById('posts-table');
        table.setAttribute('class', styles.table);
        table.innerHTML += `<tr><th>ID</th><th>Текст</th><th>Автор</th></tr>`;

        for (let key in content) {
            table.innerHTML += `<tr>
                <td>${content[key]['id']}</td>
                <td>${content[key]['title']}</td>
                <td>${content[key]['author']}</td>
                </tr>`;
        }
    } else {
        postsDiv.innerHTML = `<p>Ошибка при запросе списка постов.<br>${resp.statusText}</p>`;
    }
    
}

getPosts('http://localhost:3000/posts').catch(error => {
    let postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = `<p>Ошибка при запросе списка постов.<br>${error}</p>`;
});


// document.write('<table>1</table>')