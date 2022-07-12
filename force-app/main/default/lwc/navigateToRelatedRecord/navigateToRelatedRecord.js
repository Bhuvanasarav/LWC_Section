import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRelatedRecord extends NavigationMixin(LightningElement) {
    navToRelatedContactOfAccount(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes : {
                recordId: '0015j000007aQjyAAE',
                objectApiName : 'Account',
                relationshipApiName : 'Contacts',
                actionName : 'view'
            }
        })
    }
}