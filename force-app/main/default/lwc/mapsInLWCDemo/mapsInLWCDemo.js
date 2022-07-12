import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLWC.getAccounts'
export default class MapsInLWCDemo extends LightningElement {
    mapMarkers=[]
    markerTitle = 'Accounts Locations'
    selectedMarker
    @wire(getAccounts)
    mapHandler({data,error}){
        if(data){
            console.log(data)
            this.formatResponse(data)
        }
        if(error){
            console.error(error)
        }
    }
    formatResponse(data){
        this.mapMarkers = data.map(item=>{
            return {
                location : {
                    Street : item.BillingCity || '',
                    City : item.BillingCity || '',
                    PostalCode : item.BillingPostalCode || '',
                    State : item.BillingState || '',
                    Country : item.BillingCountry || ''
                },
                icon : 'utility:salesforce1',
                title : item.Name,
                value:item.Name,
                description : item.Description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value
    }
    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue
    }
}

