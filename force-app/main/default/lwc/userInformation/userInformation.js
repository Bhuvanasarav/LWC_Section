import { LightningElement } from 'lwc';
import USER_ID from '@salesforce/user/Id'
import IS_GUEST_USER from '@salesforce/user/isGuest'
export default class UserInformation extends LightningElement {
    userId = USER_ID
    isGuestUser = IS_GUEST_USER
}