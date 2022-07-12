import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToVFPage extends NavigationMixin(LightningElement) {
    navToVFPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/vfPageNavTarget'
            }
        }).then(generatedUrl=>{
            console.log(generatedUrl)
            window.open(generatedUrl,"__blank")
        })
    }
}