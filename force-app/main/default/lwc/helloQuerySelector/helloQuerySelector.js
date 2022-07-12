import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    userNames = ["Apple","Mango","Orange"]
    clickHandler(event){
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText)

    const userElem = this.template.querySelectorAll('.name')
    Array.from(userElem).forEach(item =>{
        console.log(item.innerText)
        item.setAttribute("title",item.innerText);
    })
    const childElem = this.template.querySelector('.child')
    childElem.innerHTML = '<p>Hi I am child element from Script</p>'
}
}