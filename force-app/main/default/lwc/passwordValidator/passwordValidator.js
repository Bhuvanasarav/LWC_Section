import { LightningElement, track } from 'lwc';

export default class PasswordValidator extends LightningElement {

    @track
    valid=true;
    handleInputChange(event) { 

         var inputString = event.target.value;

        var isPasswordLenghthValid = this.isPasswordLenghthValid(inputString);
        var isValidSpecialCharacter = this.isPasswordContainSpecialCharacter(inputString);
        var isValidNumber = this.isPasswordContainNumber(inputString);
        var isuppercaseCharacter = this.hasUpperCase(inputString);
        var isLowercaseCharacter = this.hasLowerCase(inputString);

        
        
        

        var divblockPasswordLength = this.template.querySelector('[data-id="lengthValidator"]');
        var divblockSpecialCharacter = this.template.querySelector('[data-id="specialCharacter"]');
        var divblockNumbers = this.template.querySelector('[data-id="validNumbers"]');
        var divblockValidUppercase = this.template.querySelector('[data-id="validUppercase"]');
        var divblockValidLowerCase= this.template.querySelector('[data-id="validlowercase"]');
        
        
        //  divblockPasswordLength.className = isPasswordLenghthValid ? 'validIndicator' : 'invalidIndicator';
        //  divblockSpecialCharacter.className = isValidSpecialCharacter ? 'validIndicator' : 'invalidIndicator';
        //  divblockNumbers.className = isValidNumber ? 'validIndicator' : 'invalidIndicator';
        //  divblockValidUppercase.className = isuppercaseCharacter ? 'validIndicator' : 'invalidIndicator';
        //  divblockValidLowerCase.className = isLowercaseCharacter ? 'validIndicator' : 'invalidIndicator';
        
        this.updateDiv(divblockPasswordLength, isPasswordLenghthValid);
        this.updateDiv(divblockSpecialCharacter, isValidSpecialCharacter);
        this.updateDiv(divblockNumbers, isValidNumber);
        this.updateDiv(divblockValidUppercase, isuppercaseCharacter);
        this.updateDiv(divblockValidLowerCase, isLowercaseCharacter);   
        console.log("divblockValidLowerCase " + divblockValidLowerCase);    

    }


    updateDiv(div, flag) {
        div.className = flag ? 'validIndicator' : 'invalidIndicator';        
    }

    isPasswordLenghthValid(inputString) { 

        var length = inputString.length;
        // this.valid = (length === 0 ? false : true);
        
        console.log("inInputPresent  " + this.valid);
        
        if (length > 8) {
          return true;
        }  
        
        return false;
        
    }

     isStrngContainsCharacter(inputString) { 
        
        if (inputString.length > 0) {
          return true;
        }  
        
        return false;
        
    }

    isPasswordContainSpecialCharacter(inputString) { 

        if (this.getSpecialCharacterCount(inputString) > 1) { 
            return true;
        }

        return false;
       

       
    }

    getSpecialCharacterCount(inputString) { 

        var outPut = inputString.match(/[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
        var count = 0;
        
        if (outPut != null) { 
          count=outPut.length;
        }
        //console.log("Count" + count);
        
        return count;

    }

    isPasswordContainNumber(inputString) { 

        if (this.getNumberCount(inputString) > 1) { 
            return true;
        }

        return false;
       
    }

    getNumberCount(inputString) { 

        var outPut = inputString.match(/[1234567890]/g);
        var count = 0;
        
        if (outPut != null) { 
          count=outPut.length;
        }
        console.log("Number Count" + count);
        
        return count;

    }

    hasLowerCase(str) {
        console.log("hasLowerCase " + str);
      return str.toUpperCase() != str;
   }

    hasUpperCase(str) {
     console.log("hasUpperCase " + str);
   return str.toLowerCase() != str;
   }




}