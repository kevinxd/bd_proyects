import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { resolve } from 'url';
import { reject } from 'q';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:  AngularFireAuth, public router: Router ) {  }

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

  register(email: string, password: string){
    return new Promise((resolve, reject) =>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(auth =>{
        resolve(auth)
      }).catch(err => reject(err))
    })
    
  }
}
