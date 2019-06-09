import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  espec = [];
  uid = null;
  //dbreference: FirebaseListObservable<any[]>
  data= [];
  items: {};
  constructor(db: AngularFireDatabase) {
    //this.items = db.list('Productos').snapshotChanges();
    //console.log(this.items)
    this.items = db.list('Productos/', ref => ref.orderByChild("nombre")).snapshotChanges().subscribe(datas =>{
      // firebase.database().ref("clinicas/").once("value")
        // .then(function(snapshot) {
          // var key = snapshot.key; // "ada"
       this.espec = datas;
       console.log(datas)      
       //console.log(snapshot.val());
   
     });  
  }
  

  ngOnInit() {
  }

}
