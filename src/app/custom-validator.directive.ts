import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';


@Directive({
  selector: '[appCustomValidator]',
  providers:[{
provide:NG_VALIDATORS,
useExisting:CustomValidatorDirective,
multi:true

  }]
})
export class CustomValidatorDirective implements Validator{
  validate(c: AbstractControl): { [key: string]: any; } {
    //console.log(c.value);
  return  c.value==0?{'deparmentWrong':true}:null;
 
  }
  

  constructor() { }

}
