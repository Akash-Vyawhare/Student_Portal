import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post-reactive',
  templateUrl: './add-post-reactive.component.html',
  styleUrls: ['./add-post-reactive.component.css']
})
export class AddPostReactiveComponent {

  reactiveForm: FormGroup;

  constructor(){
    this.reactiveForm=new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      password: new FormControl('', [Validators.minLength(8), Validators.pattern("")]),
      // confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])


    })

  }

  onSubmit(){
    console.log(this.reactiveForm.value)

  }
}


