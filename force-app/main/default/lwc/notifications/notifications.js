import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {
    toastSuccessHandler(){
        this.showToast('Success!', '{0} Record created! See it {1}!','success')
    }
    toastErrorHandler(){
        this.showToast('Error!', '{0} Record created! See it {1}!','error')
    }
    toastWarningHandler(){
        this.showToast('Warning!', '{0} Record created! See it {1}!','warning')
    }
    toastInfoHandler(){
        this.showToast('Info!', '{0} Record created! See it {1}!','info')
    }
    showToast(title,message,variant) {
        const event = new ShowToastEvent({
            title,
            message,
            messageData: [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'Click Here',
                },
            ],
            variant
        });
        this.dispatchEvent(event);
    }
}