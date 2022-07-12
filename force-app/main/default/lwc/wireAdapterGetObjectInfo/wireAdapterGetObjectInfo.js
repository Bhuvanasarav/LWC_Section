import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getObjectInfos , getPicklistValues} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class WireAdapterGetObjectInfo extends LightningElement {
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo
    // objectInfo({data,error}){
    //     if(data){
    //         this.defaultRecordType = data.defaultRecordTypeId
    //         console.log(data)
    //     }
    //     if(error){
    //         console.log(error)
    //     }
        
    // }
    objectApiNames = [ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    objInfos
    
    
    @wire(getObjectInfos,{objectApiNames:'$objectApiNames'})
    objectInfos({data,error}){
        if(data){
            //console.log(data)
            this.objInfos=data
        }
    }
    
}