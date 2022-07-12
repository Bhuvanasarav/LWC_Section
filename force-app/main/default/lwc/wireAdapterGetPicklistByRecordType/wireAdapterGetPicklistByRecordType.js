import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType , getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class WireAdapterGetPicklistByRecordType extends LightningElement {
    ratingOptions
    industryOptions
    slectedRating
    slectedIndustry
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objInfo

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$objInfo.data.defaultRecordTypeId'})
    picklistHandler({data,error}){
        if(data){
            console.log(data)
            this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
            this.industryOptions = this.picklistGenerator(data.picklistFieldValues.Industry)
        }
        if(error){
            console.log(error)
        }
    }

    picklistGenerator(data){
        return data.values.map(item=>({'label':item.label,'value':item.value}))
    }
    changeHandler(event){
        const {name,value} = event.target
        console.log(event.target.name +'=>'+event.target.value)
        if(name === 'rating'){
            this.slectedRating = value
        }
        if(name === 'industry'){
            this.slectedIndustry = value
        }
    }
}