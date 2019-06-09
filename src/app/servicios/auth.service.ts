import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { resolve } from 'url';
import { reject } from 'q';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:  AngularFireAuth, public router: Router, private db: AngularFirestore ) {  }

  login(email: string, password: string){

    return new Promise((resolve, reject) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(err => reject(err))
    })  
  }

  logout(){
    this.AFauth.auth.signOut().then(() =>{
      this.router.navigate(['/login'])
    })
  }

  register(email: string, password: string, name: string, lastname: string){
    return new Promise((resolve, reject) =>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res =>{
        const uid = res.user.uid;
        firebase.database().ref('Personas' + '/' + uid).set({
          name: name,
          lastname: lastname,
          uid: uid,
          Administrador: {
            id_adm: 0,
            sueldo: 10000
          } 
        })
        resolve(res)
      }).catch(err => reject(err))
    })
    
  }
}
