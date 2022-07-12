import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLWC extends NavigationMixin(LightningElement) {
    navToLWC(){
        var definition  = {
            componentDef : 'c:navigateToLWCTarget',
            attributes : {
                recordId : '123123123'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes: {
                url : '/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }
}