import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderMethodComp from './renderMethodComp.html'
export default class RenderMethodComp extends LightningElement {
    selected
    render(){
       return this.selected === 'SignUp' ? signupTemplate :
       this.selected === 'SignIn' ? signinTemplate :
       renderMethodComp
    }
    handleClick(event){
        this.selected = event.target.label
    }
    submitHandler(event){
        console.log(`${event.target.label} Success`)
    }
}