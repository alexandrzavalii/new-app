import { Injectable } from '@angular/core';

@Injectable()
export class AuthData {

  public fireAuth: any;
  public userProfile: any;
  public provider: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/user/profile');
  }

  loginUser(email: string, password: string) : any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  loginUserWithFb() : any {
     return this.fireAuth.signInWithPopup()
  }

  signupUser(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userProfile.child(newUser.uid).set({email: email});
      })
  }

  logoutUser(): any {
    return this.fireAuth.signOut();
  }

}
