import { LightningElement ,track} from 'lwc';

export default class FirstComponent extends LightningElement {
    name ="Bhuvana"
    title="Salesforce Admin"
    @track
    address = {
        city : "Chennai",
        state : "Tamil Nadu",
        country : "India"
    }
    users = ["John","Mike"]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0]
    }
    get sum(){
        return this.num1 + this.num2
    }
    changeHandler(event){
        this.title = event.target.value
    }

    trackHandler(event){
        this.address.city = event.target.value
        //this.address = {...this.address,"city":event.target.value}  //@track mutates data so to avoid it we make a copy of the array and use Spread operator to update the new property
    }
}