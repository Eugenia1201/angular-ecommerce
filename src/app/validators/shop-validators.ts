import { FormControl, ValidationErrors } from '@angular/forms';

export class ShopValidators {
    // whitespace validation -> If validaiton check fails, then return validation error; if validation check passes return null
    static notOnlyWhitespace(control: FormControl): ValidationErrors{
        // check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {
            
            // invalid, return error object
            return { 'notOnlyWhitespace': true };
        }
        else {
            //valid return null
            return null;
        }
    }
}
