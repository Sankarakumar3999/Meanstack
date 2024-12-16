export class UserModel {
}
// LOGIN USER DETAILS
export class LoginUserDetailsModel {
    email: string = '';
    password: string = '';
    rememberMe: boolean = false;
  }
  
  // REGISTER SUBMIT USER DETAILS
  export class SignupUserDetailsModel {
    userName: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    agreeTermsAndCondition: boolean = true;
    role: string = 'USER';
    isActive: boolean = true;
    isLoggedIn: boolean = false;
  }