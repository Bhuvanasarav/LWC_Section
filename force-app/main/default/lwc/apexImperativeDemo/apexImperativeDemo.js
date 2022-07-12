import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
import findAccountBySearchKey from '@salesforce/apex/AccountController.findAccountBySearchKey'
export default class ApexImperativeDemo extends LightningElement {
    accList
    error
    accSearchResult
    fetchAccountData(){
        getAccountList()
        .then((result)=>{
            this.accList = result;
            this.error = undefined;
        }).catch((error)=>{
            this.error = error;
            this.accList = undefined;
        })
    }
    fetchAccountByKey(event){
        findAccountBySearchKey({searchKey: this.searchKey})
        .then((result)=>{
            console.log(result)
            this.accSearchResult = result
        }).catch((error)=>{
            console.error(error)
        })
    }
    inputHandler(event){
        this.searchKey = event.target.value
    }
    
}