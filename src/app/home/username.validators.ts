import { AbstractControl, ValidationErrors } from "@angular/forms";
import { reject } from "q";

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors| null{
        if((control.value as string).indexOf(' ')>0){
            return {cannotContainSpace: true}
        }
        return null;

    }
    static shouldBeUnique(c: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(c.value==='koushik'){
                    resolve({usernameShouldBeUnique: true})
                }
              else resolve(null)
            },5000);
           
            
        })
        
        
    }
}