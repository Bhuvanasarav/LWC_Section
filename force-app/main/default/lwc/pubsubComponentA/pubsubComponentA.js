import { LightningElement } from 'lwc';
import pubSubDemo from 'c/pubSubDemo'

export default class PubsubComponentA extends LightningElement {
    inputMsg
    inputHandler(event){
        this.inputMsg = event.target.value
    }
    onClickHandler(){
        pubSubDemo.publish('ComponentA',this.inputMsg)
    }
}