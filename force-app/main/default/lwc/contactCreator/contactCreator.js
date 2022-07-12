import { LightningElement} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class ContactCreator extends LightningElement {
    objectApiName = 'Contact'
    fieldList = ['FirstName', 'LastName', 'Email']
    handleSuccess(event){
        this.recordId = event.detail.Id
        this.dispatchEvent(new ShowToastEvent({
            title :"Contact Created",
            message:"Record Id :"+event.detail.id,
            variant : "success"
        }));
    }

}