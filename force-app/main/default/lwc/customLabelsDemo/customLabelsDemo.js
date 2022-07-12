import { LightningElement } from 'lwc';
import DESC_ONE from '@salesforce/label/c.descriptionOne'
import DESC_TWO from '@salesforce/label/c.descriptionTwo'
export default class CustomLabelsDemo extends LightningElement {
    LABELS = {
        descOne : DESC_ONE,
        descTwo : DESC_TWO
    }
}