import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    recordView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : '0035j000005zHT7AAM',
                objectApiName : 'Contact',
                actionName : 'view'
            }
        })
    }
    recordEdit(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes : {
                recordId : '0035j000005zHT7AAM',
                objectApiName : 'Contact',
                actionName : 'edit'
            }
        })
    }
}