import './style.css';

const parent = function(parent){
    parent = document.querySelector(parent);

    return parent
};

const addElement = function(id, group, type, parent, content){

    let name = id;

    name = document.createElement(type);

    name.setAttribute('id', id);
    name.setAttribute('class', group)
    name.textContent = content;
    name.src = content;

    parent.appendChild(name);

}

const index = (function(){
    const logo = addElement('logo', '', 'div', parent('#container'), 'TonguePot');
    const bio = addElement('bio', '', 'div', parent('#container'), 'Get that on ya tastebuds');

    const tabs = addElement('tabs', '', 'ul', parent('#container'), '');
    const home = addElement('home', '','li', parent('#tabs'), 'HOME');
    const menu = addElement('menu', '', 'li', parent('#tabs'), 'MENU');
    const contact = addElement('contact', '', 'li', parent('#tabs'), 'CONTACT');

    const hero = addElement('hero', '', 'div', parent('#container'), 'Welcome to TonguePot');

})();

const homePage = function(){
    parent('#hero').textContent = '';
    parent('#hero').textContent = 'Welcome to TonguePot'
}

const menuPage = function(){
    parent('#hero').textContent = '';

    let items = [
    {type: 'Hambuger', ingredients: 'This, That, Etc.', price: '£8.99'},
    {type: 'Chicken Burger', ingredients: 'This, That, Etc.', price: '£8.99'},
    {type: 'Beef Burger', ingredients: 'This, That, Etc.', price: '£8.99'},
    {type: 'Vegan Burger', ingredients: 'This, That, Etc.', price: '£8.99'},
    {type: 'Fries', ingredients: 'This, That, Etc.', price: '£3.99'},
    {type: 'Salad', ingredients: 'This, That, Etc.', price: '£3.99'}
    ];
    console.log(items)

    addElement('','heading','div',parent('#hero'),'DISH')
    addElement('','heading','div',parent('#hero'),'INGREDIENTS')
    addElement('','heading','div',parent('#hero'),'PRICE')
    
    items.forEach(item => {
        for(let key in item){
            if(item.hasOwnProperty(key)){
                console.log(item[key])
                addElement('','','div', parent('#hero'), `${item[key]}`)
            };
        };
        // let key = Object.keys(item);
        // let value = Object.values(item).join(' ');
        // console.log(value);
    });

};

const contactPage = function(){

}

const eventBinders = (function(){
    parent('#home').addEventListener('click', homePage);
    parent('#menu').addEventListener('click', menuPage);
    parent('#contact').addEventListener('click',contactPage);
})();


