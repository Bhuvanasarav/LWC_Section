import {LightningElement, api} from 'lwc';
import APIKEY from '@salesforce/label/c.APIKEY';
import getContactInfo from '@salesforce/apex/ContactController.getContactInfo'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ValidateMobileNumber extends LightningElement {

    @api
    recordId; 

    @api
    invoke() {
        //console.log('invoked')
        this.getContactNumber(this.recordId); // this.recordId holds the current record id
    }
     getContactNumber(mRecordId) {
        //console.log(mRecordId)
        getContactInfo({contactId: mRecordId}).then(response => {
             //alert('contactId' + response.Id);
             //alert('Name' + response.Name);
             //alert('MobilePhone' + response.MobilePhone);
             //console.log("Response"+response);

            if (response != null && response.MobilePhone != null) {
                console.log("+91"+response.MobilePhone);
                this.callNumberValidAPI("+91"+response.MobilePhone);
                
            }                  
        }).catch(err => {
            alert('catch');
        })
    }
     callNumberValidAPI(number) { 
          console.log("Into callNumberValidAPI")
          //add below link to the CSP (Content Security Policy) Trusted site in Salesforce
         fetch('https://api.apilayer.com/number_verification/validate?number='+number, {
             method: 'GET',
             headers: {
                 "apikey" : APIKEY
             },
             redirect: 'follow'
         }).then(response => {   
             //return response.json();         
             return response.clone().json();
          }).then(json => {
             if (json.valid) { 
                this.showToast('Sucess','Valid Indian Number','success');
             } else {
                 this.showToast('FAIL','InValid Indian Number','error');
             }              
          }).catch(error => {
              alert('Failerd to Fetch ' + error.message);
              console.log(error);

         })
     }
showToast(title,message,variant) {
    const event = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant,
        mode: 'dismissable'
    });
    this.dispatchEvent(event);
    
    }

}