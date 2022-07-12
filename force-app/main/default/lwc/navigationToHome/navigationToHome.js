import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigationToHome extends NavigationMixin(LightningElement) {
    navToHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'home'
            }
        })
    }
    navToChatter(){
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'chatter'
            }
        })
    }
    
}