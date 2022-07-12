import { LightningElement } from 'lwc';
import pubSubDemo from 'c/pubSubDemo'
export default class PubsubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.callSubscribe()
    }
    callSubscribe(){
        pubSubDemo.subscribe('ComponentA',(message)=>{
            this.message = message
        })
    }
}