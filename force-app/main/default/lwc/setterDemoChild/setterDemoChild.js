import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetail
    @api 
    get details(){
        return this.userDetail
    }
    set details(data){
        let newAge = data.Age *2
        this.userDetail = {...data,Age:newAge,location:"Chennai"}
    }
}