import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor() { };
  post={
    title:'',
    content:''
  };
  
  addPost() {
    console.log(this.post.title, this.post.content);
  }
  onSubmit(form:NgForm) {
    if (form.invalid) {
      console.log('Invalid Form');
      return;
    }
    console.log(this.post.title, this.post.content);
  }
}
