import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class CreateRecordFromuiRecordApi extends LightningElement {
    formFields={}
    changeHandler(event){
        const {name,value} = event.target
        this.formFields[name] = value
    }
    createContact(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName,fields:this.formFields}
        console.log('Record Input'+recordInput.apiName)
        createRecord(recordInput).then(result=>{
            console.log(result)
            this.showToast('Contact created',`Record Id ${result.id}`)
            this.template.querySelector('form.createContactForm').reset()
            this.formFields={}
        }).catch(error=>{
            this.showToast('Error Creating record',error.body.message,'error')
        })
    }
    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }
}

