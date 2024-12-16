const commonData = {
    user_role: {
      user: 'USER',
      admin: 'ADMIN',
    },
    toaster: {
      timeout: 5000,
    },
    httpResponse: {
      success: 'SUCC',
      error: 'ERR',
      warning: 'WARN',
      info: 'INFO',
    },
    validation: {
      required: 'required',
      email: 'email',
      password: 'password',
      min: 'minlength',
      max: 'maxlength',
      pattern: 'pattern',
      matchValidation: 'mismatch',
      matDatepickerMin: 'matDatepickerMin',
    },
    signupFormControl :{
      userNameFieldName:'userName',
      emailFieldName:'email',
      passwordFieldName:'password',
      confirmPasswordFieldName:'confirmPassword'
    },
    signupDefaultModel: [
      {
          fieldName: 'userName',
          validation:{
              required:'Please enter userName',
          },
          placeholder:'xyz',
          label:'Name'
      },
      {
          fieldName: 'email',
          validation:{
              required:'Please enter email',
              pattern:'Please enter valid email'
          },
          placeholder:'xyz@dc.com',
          label:'Email'
      },
      {
          fieldName: 'password',
          validation:{
              required:'Please enter password',
              min:'Password should be minimum 8 character',
              max:'Password should be less than 14 character',
              pattern:'Password must satisfy criteria'
              
          },label:'Password'
      },
      {
        fieldName: 'confirmPassword',
        validation:{
            required:'Please enter password',
            mistmach:'Password not match'
        },
        label:'Confirm Password'
    }
  ],
    
    loginForm: {
      emailFieldName: 'email',
      passwordFieldName: 'password',
      rememberMeFieldName: 'rememberMe',
    },

    notes:{
      passwordHint:[
        "Atleat 8 character length",
        "Lowercase letter",
        "Uppercase letter",
        "Number",
        "Special Character"
      ]
    }

  };
  export default commonData
  