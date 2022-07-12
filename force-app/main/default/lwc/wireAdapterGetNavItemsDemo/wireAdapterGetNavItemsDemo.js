import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi'
export default class WireAdapterGetNavItemsDemo extends LightningElement {
    results
    @wire(getNavItems,{navItemNames:['standard-Account'],pageSize:30})
    navItemsHandler({data,error}){
        if(data){
            console.log(data)
            this.results = data.navItems[0]
        }
        if(error){
            console.log(error)
            
        }
    }
}