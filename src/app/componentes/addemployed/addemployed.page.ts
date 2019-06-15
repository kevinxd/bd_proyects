import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addemployed',
  templateUrl: './addemployed.page.html',
  styleUrls: ['./addemployed.page.scss'],
})
export class AddemployedPage implements OnInit {

  public email : string;
  public password: string;
  public name: string;
  public lastname: string;
  public phone: string;
  constructor(private AFauth : AuthService, private router: Router ) { }

  ngOnInit() {
  }
  
  onSubmitRegister(){
    this.AFauth.registerEmployed(this.email, this.password, this.name, this.lastname, this.phone).then(auth => {
      this.router.navigate(['dashboard'])
      console.log(auth)
    }).catch(err => console.log(err))
  }
}
