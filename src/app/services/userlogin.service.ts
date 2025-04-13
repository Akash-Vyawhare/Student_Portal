import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { DialogComponent } from '../common/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http:HttpClient, private dialog:MatDialog,  ) { }

   userapi="http://localhost:3000/users";


addUser(user:any){
 this.http.post(this.userapi,user).subscribe((response)=>{
console.log(" Hi added" + response);
this.dialog.open(DialogComponent,{
  width: '500px',
  height: '200px',
  position: { top: '10px', right: '10px' },
  data: 'User registered successfully'
})
});

}
getAllUserList(){
  return this.http.get(this.userapi).pipe(
    map((response:any) => {
      return response;
   
 }));
}
getUser(userId:any){
  return this.http.get(`${this.userapi}/${userId}`)

}
updateUser(userId:any,user:any){
  return this.http.put(`${this.userapi}/${userId}`,user)

}

login(email: string, password: string): Observable<boolean> {
  return this.http.get<any[]>(this.userapi).pipe(
    map((users) => {
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user)); // Store user data
        
        console.log(user);
        return true; // Login successful
      } else {
        return false; // Invalid credentials
      }
    })
  );
}
isLoggedIn(): boolean {
  return !!localStorage.getItem('user');
}
logout() {
  localStorage.removeItem('user');
}
}