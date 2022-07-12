import { LightningElement } from 'lwc';

export default class LifeCycleHookChild extends LightningElement {
    constructor(){
        super();
        console.log("Child Constructor called")
    }
    connectedCallback(){
        console.log("Child connectedCallback called")
        throw new Error('Loading child component failed')
    }
    renderedCallback(){
        console.log("Child renderedCallback called")
    }
    disconnectedCallback(){
        alert("Child removal is called!!!")
    }
}