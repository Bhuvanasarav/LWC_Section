import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {
    selected={}  //storing selected value
    correctAnswers = 0 // storing correct answer count
    isSubmitted = false //used to show result 
    myQuestions = [
        {
            id : "Question1",
            question : "Salesforce Scratch Org is?",
            options : {
                a : "Sandbox Org",
                b : "Production Org",
                c : "Disposable Org"
            },
            correctAnswer : "c"
        },
        {
            id : "Question2",
            question : "How you write Expression in LWC HTML?",
            options : {
                a : "if:true=\"{propertyName}\"",
                b : "if:true={propertyName}",
                c : "if:true={!propertyName}"
            },
            correctAnswer : "b"
        },
        {
            id : "Question3",
            question : "Developer Tool required to work on LWC?",
            options : {
                a : "Salesforce CLI",
                b : "Eclipse",
                c : "Developer Console"
            },
            correctAnswer : "a"        
        }
    ]
    get isScoredFully(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 
            'slds-text-color_success':'slds-text-color_error'}`
    }
    get allNotSelected(){
        return !(Object.keys(this.selected).length ===this.myQuestions.length)
    }
    changeHandler(event){        
        const{name,value} = event.target
        //console.log(name, value)
        this.selected = {...this.selected,[name]:value}  //used to get as Q1:a not name:a
        console.log(this.selected)
    }
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] == item.correctAnswer)
        this.correctAnswers = correct.length
        console.log(this.correctAnswers)
        this.isSubmitted = true
    }
    resetHandler(){
        this.selected = {}
        this.isSubmitted = false
    }
}