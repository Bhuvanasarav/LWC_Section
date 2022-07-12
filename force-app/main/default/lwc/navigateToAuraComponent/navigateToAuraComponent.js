import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {
    navToAura(){
        this[NavigationMixin.Navigate]({
            type:"standard__component",
            attributes:{
                componentName : "c__AuraNavTarget"
            },
            state:{
                "c__id":"12312131213"
            }
        })
    }
}
