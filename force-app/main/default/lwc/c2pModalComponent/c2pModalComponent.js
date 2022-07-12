import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    okHandler(){
        const myEvent = new CustomEvent('close',{
            detail : "Modal Closed"
        })
        this.dispatchEvent(myEvent)
    }
}