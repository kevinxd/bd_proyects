import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrudService } from "../../servicios/crud.service";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  id = null;
  //dbreference: FirebaseListObservable<any[]>
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(db: AngularFireDatabase, public alertController: AlertController, private crud: CrudService, private router: Router ) {
   
    console.log(this.id)
    this.itemsRef = db.list('MateriaPrima');
   this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );
  }
  
  async presentAlert(key) {
    console.log(key)
    const alert = await this.alertController.create({
      header: 'Eliminar Materia Prima',
      message: '¿Seguro que quieres eliminar este item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //this.editMat(this.name);
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.crud.deleteMateria(key).then(auth => {
              this.router.navigate(['dashboard'])
              console.log(auth)
            }).catch(err => console.log(err))
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertEdit(key) {
    console.log(key)
    const alert = await this.alertController.create({
      header: 'Editar Materia Prima',
      inputs: [
        {
          name: 'price',
          type: 'text',
          placeholder: 'Precio'
          
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'Cantidad'
          
        },
        {
          name: 'description',
          type: 'text',
          placeholder: 'Descripcion'
          
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //this.editMat(this.name);
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            console.log('Confirm Ok',alertData.name);
            if (alertData.price == '' || alertData.quantity == '' || alertData.description == '' ){
              console.log('vacios')
            }else{
            this.crud.updateMateria(key, alertData.price, alertData.quantity, alertData.description).then(auth => {
              this.router.navigate(['dashboard'])
              console.log(auth)
            }).catch(err => console.log(err))
           }
          }
        }
      ]
    });

    await alert.present();
  }







  ngOnInit() {
  }

  editMat(key){
    console.log("llege")
    /*(click)="editMat(item.idMat)"*/

  }

}
