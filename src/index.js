import _ from 'lodash'

function component(){
    const element = document.createElement('div');
    const array = ['Helloooooo', 'WebPAAAAACKKKKK', 'Fuuuuuuuuuuuuucccccckkkkkk!!!'];
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());