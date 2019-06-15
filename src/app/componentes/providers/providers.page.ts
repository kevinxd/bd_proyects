import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CrudService } from "../../servicios/crud.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.page.html',
  styleUrls: ['./providers.page.scss'],
})
export class ProvidersPage implements OnInit {

  

  constructor(db: AngularFireDatabase, private fbAdd : CrudService, private router: Router) { }

  ngOnInit() {
  }




}
