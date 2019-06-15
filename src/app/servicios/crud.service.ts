import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public nameProv: string;
  constructor(database: AngularFireDatabase) { }

  addToInventory(name: string, quantity:string, price: string, description: string){

    return new Promise((resolve, reject) =>{
    //let key = firebase.database().ref('Inventario').push().key;
    firebase.database().ref('Inventario').push({
      name: name,
      quantity: quantity,
      price : price,
      description: description,
      idInv : '',
      date: new Date().toISOString()
    }).then(snap =>{
      const key = snap.key
      firebase.database().ref('Inventario' +'/'+ key).update({
        idInv : key
      })
      resolve(snap)
    }).catch(err => reject(err))  
    })
  } 
  
  addToMateriaprima(name: string, quantity:string, price: string, description: string, rifProv: string){
    return new Promise((resolve, reject) =>{  
    firebase.database().ref('Proveedores').orderByChild('rif').equalTo(rifProv).on("value", function(snapshot){
      var data = snapshot.val();  
      for(let key in data){
        firebase.database().ref('MateriaPrima').push({
          Proveedor:{
          name : data[key].name,
          lastname : data[key].lastname,
          company : data[key].company,
          idprov : data[key].idprov,
          phone :  data[key].phone,
          rif : data[key].rif
          },
          name: name,
          quantity: quantity,
          price : price,
          description: description,
          rifProv: rifProv,
          idMat : '',
          date: new Date().toISOString(),
        }).then(snap =>{
          resolve(snap)
          const key = snap.key
          firebase.database().ref('MateriaPrima'+'/'+ key).update({ 
            idMat : key     
          })   
        }).catch(err => reject(err))         
      }
    })
  })
}

  addProviders(name: string, lastname:string, phone: string, company: string, rif: string){
    return new Promise((resolve, reject) =>{
    //let key = firebase.database().ref('Proveedores').push().key;
    firebase.database().ref('Proveedores').push({
      name: name,
      lastname: lastname,
      phone : phone,
      company: company,
      rif: rif,
      idprov : '',
    }).then(snap =>{
      const key = snap.key
      firebase.database().ref('Proveedores'+ '/' + key).update({
        idprov : key 
      })
      resolve(snap)
    }).catch(err => reject(err))  
    })
  } 

  deleteMateria(key){
    return new Promise((resolve, reject) =>{
    firebase.database().ref('MateriaPrima'+'/'+ key).remove().then(user => {
      resolve(user)
    }).catch(err => reject(err))
  })  
  }

  updateMateria(key, price, quantity, description){
    return new Promise((resolve, reject) =>{
    firebase.database().ref('MateriaPrima'+'/'+ key).update({
      price: price,
      quantity: quantity,
      description: description
    }).then(user => {
      resolve(user)
    }).catch(err => reject(err))
  })  
  }


}