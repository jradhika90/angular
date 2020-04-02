import { AbstractControl } from "@angular/forms";

// custom validator for matching two fields
export function FieldMatch(controlName: string, matchingControlName: string) {
  return (AC: AbstractControl) => {
    //console.log(AC);
  let controlNameValue = AC.get(controlName).value;
  let matchingControlNameValue = AC.get(matchingControlName).value;

   if (controlNameValue !== matchingControlNameValue) {
      AC.get(matchingControlName).setErrors({Mismatch: true});
      console.log(false);
    } else {
      console.log(true);
      return null
    }
  };
}
