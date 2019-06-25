import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrudService } from "../../servicios/crud.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-inv-store',
  templateUrl: './inv-store.page.html',
  styleUrls: ['./inv-store.page.scss'],
})
export class InvStorePage implements OnInit {

  public products : string;
  public quantity : string;
  public price : string;
  public description : string;

  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(db: AngularFireDatabase, private fbAdd : CrudService, private router: Router) {  
   this.itemsRef = db.list('Productos');
   this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );
    //console.log(this.items)
  }
  
    
  ngOnInit() {
  }

  getProducts(){
    this.fbAdd.addToInventory(this.products, this.quantity, this.price, this.description).then(res => {
      this.router.navigate(['dashboard'])
      console.log(res)
    }).catch(err => console.log(err))
  }
  




}
