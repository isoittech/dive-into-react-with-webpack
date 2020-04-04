import _ from 'lodash'
// import style from './style.css'
// console.log("style:" + style)
// console.log("style:" + style.toString())
import './style.css'

function component() {
    const element = document.createElement('div');
    const array = ['Helloooooo', 'WebPAAAAACKKKKK', 'NNNNNIIIIIICEEEEEEEEE!!!'];
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');