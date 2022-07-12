import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToWebPage extends NavigationMixin(LightningElement) {
    navToWebPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'https://salesforce.com'
            }
        })
    }
}