import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import TITLE from '@salesforce/schema/Contact.Title'
export default class WireAdapterGetListViewDemo extends LightningElement {
    contacts=[]
    pageToken =null
    nextPageToken = null
    prevPageToken = null
    @wire(getListUi,{objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts',
        pageSize:10,
        sortBy:TITLE,
        pageToken:'$pageToken'
    })
    listViewHandler({data}){
        if(data){
            console.log(data)
        this.contacts = data.records.records
        this.nextPageToken = data.records.nextPageToken
        this.prevPageToken = data.records.prevPageToken
        }
        
    }
    handlePrevPage(){
        this.pageToken = this.prevPageToken
    }
    handleNextPage(){
        this.pageToken = this.nextPageToken
    }
}