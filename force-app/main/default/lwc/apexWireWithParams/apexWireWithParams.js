import { LightningElement, wire } from 'lwc';
import getFilterAccountsByType from '@salesforce/apex/AccountController.getFilterAccountsByType'
export default class ApexWireWithParams extends LightningElement {
    selectedType = 'Customer - Direct'
    viewData = false
    @wire(getFilterAccountsByType,{type:'$selectedType'})
    filterAccounts

    get typeOptions(){
        return [
            {label: 'Customer - Channel', value: 'Customer - Channel'},
            {label: 'Customer - Direct', value: 'Customer - Direct'},
            {label: 'Prospect', value: 'Prospect'}
        ]
    }
    typeHandler(event){
        this.selectedType = event.target.value
    }
    searchHandler(){
    this.viewData =true
    }
    resethHandler(){
        this.viewData = false
    }
}
