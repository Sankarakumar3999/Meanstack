import { ApplicationModule, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { SignupUserDetailsModel } from '../../Models/user-model';
import common from '../../Constants/common-constant';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,SharedModule,CommonModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {

  public signupForm: FormGroup;
  public signupUserModel :  SignupUserDetailsModel
  public signupDefaultModel = common.signupDefaultModel;
  public signupFormControl = common.signupFormControl;
  public passwordHint = common.notes.passwordHint
  public isConfirmPwdDisabled = true;

  constructor( private fb : FormBuilder){
  }
  onSubmit(){
  }
  ngOnInit(){
    this.createFrom()
  }
  createFrom(){
    this.signupForm = this.fb.group(
      {
        userName: new FormControl(
          this.signupUserModel?.userName,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
          ])
        ),
        email: new FormControl(
          this.signupUserModel?.email,
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ])
        ),
        password: new FormControl(
          this.signupUserModel?.password,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$'
            ),
          ])
        ),
        confirmPassword: new FormControl(
          {
            disabled: true,
            value: this.signupUserModel?.confirmPassword,
          },
          Validators.compose([Validators.required])
        ),
      },{
        validators: this.matchValidator(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

   // Show Validation error
   public showError(formControlName: string) {
    const error:any = this.signupForm?.get(formControlName)?.errors
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

  // Enable/disable the confirm password field
  public enableDisableConfirmPwd() {
    this.isConfirmPwdDisabled =
      !this.signupForm?.value?.password?.length;
    const ctrl = this.signupForm?.get('confirmPassword');
    if (this.isConfirmPwdDisabled && ctrl) {
      ctrl.disable();
    } else if(ctrl){
      ctrl.enable();
    }
  }

  // Validate password and confirmpassword
  public matchValidator(source: string, target: string) {
    return (formGroup: FormGroup) => {
      const sourceControl = formGroup.get(source);
      const targetControl = formGroup.get(target);

      if (targetControl?.errors && !targetControl?.errors?.['mismatch']) {
        return null;
      }

      if (sourceControl?.value !== targetControl?.value) {
        targetControl?.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        targetControl?.setErrors(null);
        return null;
      }
    };
  }
}


  