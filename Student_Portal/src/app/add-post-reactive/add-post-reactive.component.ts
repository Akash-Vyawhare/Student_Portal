import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserloginService } from '../services/userlogin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post-reactive',
  templateUrl: './add-post-reactive.component.html',
  styleUrls: ['./add-post-reactive.component.css']
})
export class AddPostReactiveComponent implements OnInit {

  reactiveForm: FormGroup;
  userId:any="new";
  user:any;

  constructor(private userloginService: UserloginService, private routes:ActivatedRoute) {

    this.reactiveForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      password: new FormControl('', [Validators.required,Validators.minLength(8), Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]),
       confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }
  ngOnInit(): void {
    this.userId = this.routes.snapshot.paramMap.get('id');
    
    if(this.userId && this.userId !== 'new'){
      this.userloginService.getUser(this.userId).subscribe((response:any)=>{
    
      console.log(response);
      this.reactiveForm.patchValue({
        name: response['name'],
        email: response['email'],
        mobileNumber: response['mobileNumber'],
        password: response['password'],
        confirmPassword: response['confirmPassword']
      })
    });
        
  }
}

  onSubmit(){
    if(this.userId && this.userId !== 'new'){
      this.userloginService.updateUser(this.userId,this.reactiveForm.value).subscribe((response:any)=>{  
      });
    }else{
    this.userloginService.addUser(this.reactiveForm.value)
    console.log(this.reactiveForm.value);


  }
}
}

