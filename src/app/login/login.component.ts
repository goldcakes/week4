import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  email = "";
  pwd = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  itemClicked() {
    console.log("Success")
    var user = [{email:"abc@test.com", password:"123"}, {email:"def@test.com", password:"456"}, {email:"ghi@test.com", password:"789"}]
    var userValid = false
    for (let i=0; i<user.length; i++) {
      if (this.email == user[i].email && this.pwd == user[i].password) {
        this.router.navigate(['/account'])
        
        userValid = true
      }
    }
    if (userValid == false) {

    }
  }

}
