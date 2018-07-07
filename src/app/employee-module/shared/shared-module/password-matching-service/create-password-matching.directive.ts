
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCreatePasswordMatching]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:CreatePasswordMatchingDirective,
    multi:true
  }]
})
export class CreatePasswordMatchingDirective implements Validator {
  @Input() appCreatePasswordMatching:string;
validate(control:AbstractControl):{[key:string]:any}|null{
  var pasWord=control.parent.get(this.appCreatePasswordMatching);
  if(pasWord&&pasWord.value!=control.value){
    return{'notMatch':true};
  }
return null;
}
  constructor() { }

}
