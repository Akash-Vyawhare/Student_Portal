import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserloginService } from '../../services/userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  errorMessage: string = '';
  constructor( private loginService: UserloginService, private router: Router) {
    this.loginForm=new FormGroup({  
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      rememberMe: new FormControl(false, [ Validators.requiredTrue]),
    })
}
onLogin(){
  if (this.loginForm.invalid) 
    return this.loginForm.markAllAsTouched();
  

  const { email, password } = this.loginForm.value;

  this.loginService.login(email, password).subscribe((success) => {
    if (success) {
      
      this.router.navigate(['/application']); // Navigate to Dashboard
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  });

 }
}