import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import common from '../../Constants/common-constant';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,SharedModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  public signupDefaultModel = common.signupDefaultModel

  constructor( private router:Router,public fb:FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.loginForm = this.fb.group(
      {
        email: new FormControl(
          'xyz@.com',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ])
        ),
        password: new FormControl(
          'pop@19.S',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$'
            ),
          ])
        ),
      }
    );
  }

   // Show Validation error
   public showError(formControlName: string) {
    const error:any = this.loginForm?.get(formControlName)?.errors
    const errorKeys = error ? Object.keys(error) :[]
    let errorMsg = null;
    if(errorKeys && errorKeys.length>0){
      this.signupDefaultModel.filter((data:any)=>{
        if(data.fieldName == formControlName){
          errorMsg = data.validation[errorKeys[0]]
          return errorMsg
        }
      })
    }
    console.log(formControlName,errorMsg)
    return errorMsg;
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.router.navigateByUrl("/home/"+this.loginForm.value.email);
    }
  }
}
