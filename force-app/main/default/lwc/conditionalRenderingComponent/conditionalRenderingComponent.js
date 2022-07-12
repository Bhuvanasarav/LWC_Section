import { LightningElement } from 'lwc';

export default class ConditionalRenderingComponent extends LightningElement {
    isVisible = false
    name
    handleClick(){
        this.isVisible = true
    }
    changeHandler(event){
        this.name =  event.target.value
    }
    resetClick(event){
        this.isVisible = false
    }
    get getHelloWord(){
        return this.name === "hello"
    }
}