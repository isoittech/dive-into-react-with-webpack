function component(){
    const element = document.createElement('div');
    const array = ['Helloooooo', 'WebPAAAAACKKKKK'];
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());