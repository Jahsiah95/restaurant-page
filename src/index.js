import './style.css';

const parent = function(parent){
    parent = document.querySelector(parent);

    return parent
};

const addElement = function(id, type, parent, content){

    let name = id;

    name = document.createElement(type);

    name.setAttribute('id', id);
    name.textContent = content;
    name.src = content;

    parent.appendChild(name);

}

const index = (function(){
    const logo = addElement('logo', 'div', parent('#container'), 'TonguePot');
    const bio = addElement('bio', 'div', parent('#container'), 'Get that on ya tastebuds');

    const tabs = addElement('tabs', 'ul', parent('#container'), '');
    const home = addElement('home', 'li', parent('#tabs'), 'HOME');
    const menu = addElement('menu', 'li', parent('#tabs'), 'MENU');
    const contact = addElement('contact', 'li', parent('#tabs'), 'CONTACT');

    const hero = addElement('hero', 'div', parent('#container'), 'Welcome to TonguePot');

})();

const homePage = function(){
    parent('#hero').textContent = '';
    parent('#hero').textContent = 'Welcome to TonguePot'

}

const menuPage = function(){
    parent('#hero').textContent = '';

    let items = [
    {type: 'Hambuger', price: '£8.99', ingredients: 'This, That, Etc.'},
    {type: 'Chicken Burger', price: '£8.99', ingredients: 'This, That, Etc.'},
    {type: 'Beef Burger', price: '£8.99', ingredients: 'This, That, Etc.'},
    {type: 'Vegan Burger', price: '£8.99', ingredients: 'This, That, Etc.'},
    {type: 'Fries', price: '£3.99', ingredients: 'This, That, Etc.'},
    {type: 'Salad', price: '£3.99', ingredients: 'This, That, Etc.'}
    ]
    console.log(items)

    parent('#hero').textContent = items[0].type + ', ' + items[0].price

}

const contactPage = function(){

}

const eventBinders = (function(){
    parent('#home').addEventListener('click', homePage);
    parent('#menu').addEventListener('click', menuPage);
    parent('#contact').addEventListener('click',contactPage);
})();


