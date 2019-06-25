import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CrudService } from "../../servicios/crud.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-add-inv',
  templateUrl: './add-inv.page.html',
  styleUrls: ['./add-inv.page.scss'],
})
export class AddInvPage implements OnInit {

  public name : string;
  public quantity : string;
  public price : string;
  public description : string;
  public rifProv: string;
  
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(db: AngularFireDatabase, private fbAdd : CrudService, private router: Router) {
   this.itemsRef = db.list('MateriaPrima');
   this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );
  console.log("*",this.items)
  }

  ngOnInit() {
  }

  getMateriaPrima(){
    this.fbAdd.addToMateriaprima(this.name, this.quantity, this.price, this.description, this.rifProv).then(res => {
      this.router.navigate(['dashboard'])
      console.log(res)
    }).catch(err => console.log(err))
    
  }





}
