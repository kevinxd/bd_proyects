import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email : string;
  public password: string;
  constructor(private AFauth : AuthService, private router: Router ) { }
  ngOnInit() {
  }

  onSubmitRegister(){
    this.AFauth.register(this.email, this.password).then(auth => {
      this.router.navigate(['dashboard'])
      console.log(auth)
    }).catch(err => console.log(err))
  }
}
