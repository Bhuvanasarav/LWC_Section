import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import ACCOUNT from '@salesforce/schema/Contact.AccountId'
import NAME from '@salesforce/schema/Contact.Name'
import EMAIL from '@salesforce/schema/Contact.email'
import LEADSOURCE from '@salesforce/schema/Contact.LeadSource'
import MOBILE_PHONE from '@salesforce/schema/Contact.MobilePhone'

export default class RecordEditFormDemo extends LightningElement {
    objectName = CONTACT_OBJECT
    fields = {
        contactName : NAME,
        accountName : ACCOUNT,
        email :EMAIL,
        leadSource:LEADSOURCE,
        mobile : MOBILE_PHONE}

        resetHandler(){
            const inputFields = this.template.querySelectorAll('lightning-input-field')
            if(inputFields){
                Array.from(inputFields).forEach(field => {
                    field.reset();
                });
            }
        }
}