import { LightningElement, api} from 'lwc';

export default class LwcAuraCoexistence extends LightningElement {
    @api detail
    callAura(){
        const event = new CustomEvent('sendmsg',{
            detail :{
                "msg" : "Hello I am from LWC"
            }
        })
        this.dispatchEvent(event)
    }
}