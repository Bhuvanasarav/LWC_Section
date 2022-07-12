import { LightningElement } from 'lwc';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
import {NavigationMixin} from 'lightning/navigation'
export default class NavigationToHome extends NavigationMixin(LightningElement) {
    navToNewRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            }
        })
    }
    navToNewRecordWithDefaultValues(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName : 'Bhuvana',
            LastName : 'LWC',
            LeadSource : 'Other'
        })
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes :{
                objectApiName : 'Contact',
                actionName : 'new'
            },
            state : {
                defaultFieldValues : defaultValues
            }
        })
    }
    navToListView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'list'
            },
            state:{
                filterName : 'Recent'
            }
        })
    }
    navToFiles(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'ContentDocument',
                actionName : 'home'
            }
        })
    }
}