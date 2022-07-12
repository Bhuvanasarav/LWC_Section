import { LightningElement } from 'lwc';

export default class LifeCycleHookParent extends LightningElement {
    isVisible = false
    constructor(){
        super();
        console.log("Parent Constructor called")
    }
    connectedCallback(){
        console.log("Parent connectedCallback called")
    }
    renderedCallback(){
        console.log("Parent renderedCallback called")
    }
    // name
    // changeHandler(event){
    //     this.name = event.target.value
    // }
    handleClick(){
        this.isVisible = !this.isVisible
    }
    errorCallback(error,stack){
        console.log(error.message,stack);
    }
}