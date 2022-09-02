import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const BACKURL = "http://localhost:3000"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  pwd = "";

  constructor(private router:Router, private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  itemClicked() {
    let  DATA = {email:this.email, pwd:this.pwd};
    this.httpClient.post(BACKURL+"/api/auth",DATA ).subscribe((res:any)=>{
      console.log(res);
      if (res.valid == true) {
        this.router.navigate(['/account'])
      } else {
        alert("Incorrect login")
      }
    })
    console.log("Success")
  }
}
