import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY from '@salesforce/schema/Account.Industry'
import ACCOUNT from '@salesforce/schema/Account'
export default class WireAdapterGetPicklistValues extends LightningElement {
    defaultRecordType
    selectedIndustry
    industryOptions=[]
    @wire(getObjectInfo,{objectApiName:ACCOUNT})
    accObjectInfo

    @wire(getPicklistValues,{recordTypeId:'$accObjectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY})
    industryPickList({data,error}){
        if(data){
            console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
    }
    
    //     return [
    //         {label:'New',value:'new'},
    //         {label:'In Progress',value:'inprogress'},
    //         {label:'Finished',value:'finished'}
    //     ]
    // }
    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
    onchangeHandler(event){
        this.selectedIndustry = event.detail.value
    }

}