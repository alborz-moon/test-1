const container = document.createElement('div');
        container.classList.add('container');

function generatElements(tageName , attribute, ...childs){
    const element = document.createElement(tageName);

    if (attribute){
        Object.keys(attribute).forEach(key => {
            element.setAttribute(key, attribute[key])
        })
    }
    if (childs){
        childs.forEach(child => {
            if ('stiring' === typeof childs){
                element.appendChild(document.createTextNode(childs))
            } else{
                element.appendChild(childs);
            }
        })
    }
    return element;
}

function generatInfo(name, age){
    const cart = document.createElement('div');
        cart.classList.add('cart');

    const nameEL = document.createElement('span');
        nameEL.innerText=`name ${name}`;

    const ageEL = document.createElement('span');
        ageEL.innerText=`age : ${age}`;

    cart.appendChild(nameEL);
    cart.appendChild(ageEL);
    
    return cart;
}

const userData = [
    {name: 'ALborz', age : 26},
    {name: 'amir', age : 27},
    {name: 'ali', age : 28},
]

userData.forEach( data => {
    container.appendChild(generatInfo(data.name,data.age))
})
console.log(container);