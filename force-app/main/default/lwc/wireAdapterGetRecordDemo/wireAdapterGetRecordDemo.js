import { api, LightningElement, wire } from 'lwc';
import { getRecord,getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
export default class WireAdapterGetRecordDemo extends LightningElement {
    name
    ownerName
    annualRevenue
    @api recordId
    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,OWNER_FIELD,ANNUAL_REVENUE]})
   // @wire(getRecord,{recordId:'$recordId',layoutType:[Full],modes:['View]}) //returns all the fields in the object
    accountHandler({data}){
        if(data){
            console.log(data)
            //this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value // to avoid this we use getFieldValue adapter
            //this.ownerName = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value.fields.Name.value
            //this.annualRevenue  = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
            this.name =getFieldDisplayValue(data,NAME_FIELD)? getFieldDisplayValue(data,NAME_FIELD): getFieldValue(data,NAME_FIELD) 
            this.ownerName = getFieldDisplayValue(data,OWNER_FIELD)? getFieldDisplayValue(data,OWNER_FIELD): getFieldValue(data,OWNER_FIELD) 
            this.annualRevenue = getFieldDisplayValue(data,ANNUAL_REVENUE)? getFieldDisplayValue(data,ANNUAL_REVENUE): getFieldValue(data,ANNUAL_REVENUE) 
            
        }
    }

}