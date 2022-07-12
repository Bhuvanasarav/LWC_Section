import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handleFooterChange(){
        const footElem = this.template.querySelector('.slds-card__footer')
        if(footElem){
            footElem.classList.remove('slds-hide')
        }
    }
}

