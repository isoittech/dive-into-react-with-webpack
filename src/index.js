import _ from 'lodash'
// import { Nijou, NAME } from './utilities'
// console.log(Nijou(17));
// console.log(NAME);

// import * as utilities from './utilities'
// console.log(utilities.Nijou(17));
// console.log(utilities.NAME + '君');

import { Nijou as funcNijou, NAME as NAME_as_BOSE } from './utilities'
console.log(funcNijou(17));
console.log(NAME_as_BOSE + 'さん');

import Lion from './utilities'
console.log(Lion.say());

import Tiger from './utilities'
console.log('Tigarだぞ' + Tiger.say())


function component() {
    const element = document.createElement('div');
    const array = ['Helloooooo', 'WebPAAAAACKKKKK', 'NNNNNIIIIIICEEEEEEEEE!!!'];
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());
