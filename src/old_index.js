import _ from 'lodash'
import './style.css'
import './style.scss'
import logo from './nike.logo.png';
import logo2 from './nike.logo2.png';

function component() {
    const element = document.createElement('div');
    const array = ['Helloooooo', 'WebPAAAAACKKKKK', 'NNNNNIIIIIICEEEEEEEEE!!!'];
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

// イメージタグとして設定する
const image = new Image();
image.src = logo;
document.body.appendChild(image);
const image2 = new Image();
image2.src = logo2;
document.body.appendChild(image2);