import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  // Properties
  public token: string;

  constructor(private router: Router) { }

  public signupUser(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['Login']))
      .catch(error => console.log(error));
  }
  public signinUser(email: string, password: string) {  
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => { this.token = token; });
      })
      .catch(error => console.log(error));
  }
  public signoutUser() {
    firebase.auth().signOut();
    this.token = null;
  }
  public getToken() { 
    return this.token;
  }
  public isAuthenticated() {
    return this.token != null;
  }
}
