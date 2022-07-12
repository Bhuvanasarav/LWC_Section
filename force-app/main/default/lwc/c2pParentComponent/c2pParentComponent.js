import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isVisible = false
    handleClick(){
        this.isVisible = true
    }
    msg
    closeHandler(event){
        this.msg = event.detail
        this.isVisible = false
    }
}