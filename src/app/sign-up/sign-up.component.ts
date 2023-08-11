import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { PizzaAppService } from '../pizza-app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: User;


  constructor(private route: ActivatedRoute, private router: Router, private userService: PizzaAppService,  private signUpForm:FormBuilder) {
    this.user = new User();
  }

  signUpDetails=this.signUpForm.group({
    userName:['',[Validators.required,Validators.minLength(4)]],

    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern]],
    confirmPassword:[''],


    phoneNumber:['']
    
     
      
  },
  {validators:this.confirmPass}
  )


  confirmPass(pass:AbstractControl):ValidationErrors|null {
    var getPassword=pass.get('password')?.value;
    var getConfirmPassword=pass.get('confirmPassword')?.value;
    if(getConfirmPassword=="")
    {
      return {passMatch1:false}
    }
    else if(getPassword!=getConfirmPassword)
    {
      console.log("error");
      return {passMatch2:false}
    }
    return null;
  }

  get userName(){
    return this.signUpDetails.get('userName');
  }
  
  get email(){
    return this.signUpDetails.get('email');
  }
  get password(){
    return this.signUpDetails.get('password');
  }
  get confirmPassword()
  {
    return this.signUpDetails.get('confirmPassword');
  }
  get phoneNumber(){
    return this.signUpDetails.get('phoneNumber');
  }
  

  onSubmit() {
    this.userService.signUp(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/login']);
  }
}
