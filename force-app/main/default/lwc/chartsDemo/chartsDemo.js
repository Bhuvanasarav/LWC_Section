import { LightningElement ,wire} from 'lwc';
import getOpportunity from '@salesforce/apex/OpportunityController.getOpportunity'
export default class ChartsDemo extends LightningElement {
    pieChartLabels =[]
    pieChartData = []
    @wire(getOpportunity)
    oppHandler({data,error}){
        if(data){
            console.log(data)
            const result = data.reduce((json,val)=>({...json,[val.StageName]:(json[val.StageName]|0)+1}),{})
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
            }
        }
        if(error){
            console.log(error)
        }
    }
}
