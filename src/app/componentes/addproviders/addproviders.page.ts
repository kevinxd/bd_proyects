import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CrudService } from "../../servicios/crud.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addproviders',
  templateUrl: './addproviders.page.html',
  styleUrls: ['./addproviders.page.scss'],
})
export class AddprovidersPage implements OnInit {

  public name : string;
  public lastname : string;
  public company : string;
  public rif : string;
  public phone: string;

  constructor(db: AngularFireDatabase, private fbAdd : CrudService, private router: Router) { }

  ngOnInit() {
  }

  getProviders(){
    this.fbAdd.addProviders(this.name, this.lastname, this.phone, this.company, this.rif).then(ress => {
      this.router.navigate(['dashboard'])
      console.log(ress)
    }).catch(err => console.log(err))

  }

}
