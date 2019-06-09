import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-inv-t',
  templateUrl: './add-inv-t.page.html',
  styleUrls: ['./add-inv-t.page.scss'],
})
export class AddInvTPage implements OnInit {
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(db: AngularFireDatabase) {  
   this.itemsRef = db.list('Productos');
   this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );
    console.log(this.items)
  }
  
    
  ngOnInit() {
  }



}


