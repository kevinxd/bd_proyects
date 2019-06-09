import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
  constructor(db: AngularFireDatabase) {  
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
    console.log(this.products)
    console.log(this.quantity)
    console.log(this.price)
    console.log(this.description)

  
  }


}
