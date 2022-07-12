import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import ID from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD,EMAIL_FIELD]
export default class WireAdapterUserInfoDemo extends LightningElement {
    Id = ID
    userFields
    //@wire(getRecord,{recordId:'0055j000000t6BdAAI',fields:['User.Name','User.Email']})
    //@wire(getRecord,{recordId:this.Id,fields:['User.Name','User.Email']}) // component Error as ID from '@salesforce/user/Id' is asyn process so Id is unread 
    @wire(getRecord,{recordId:'$Id',fields}) // Reactive variable '$Id' - so we use $Id as it will execute only when data is available
    getUserHandler({data,error}){ 
        //getUserHandler(response){
        //console.log(response)}
        if(data){
            this.userFields = data.fields            
        }
        if(error){
            console.log(error)
        }
    }
    @wire(getRecord,{recordId:'$Id',fields})
    userFieldProp
}