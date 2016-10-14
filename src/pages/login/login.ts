import {
  NavController,
  LoadingController,
  AlertController,
  Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
/*import { Facebook } from 'ionic-native';
import { AuthProviders, AuthMethods, AngularFire } from "angularfire2";*/

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: any;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
  fbProfile: any;



  constructor(public nav: NavController, public authData: AuthData,
              private formBuilder: FormBuilder,public alertCtrl: AlertController,
              public loadingCtrl: LoadingController, public platform: Platform) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
  }

  /**
   * Login user with email, password
   */
  loginUser(){
    this.submitAttempt = true;

    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {

      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
        this.nav.setRoot(HomePage);
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }


  /**
   * Login user with Facebook
   */
/*  loginUserWithFb() {
    var _authInfo;

    Facebook.login(['email'])
      .then((_response) => {
        _authInfo = _response;
        return this._FBUserProfile();
      }).then((success) => {
        this.fbProfile = success;
      let cred = this.authData.provider.credential(_authInfo.authResponse.accessToken);
      let providerConfig = {
        provider: AuthProviders.Facebook,
        method: AuthMethods.OAuthToken,
        remember: 'default',
        scope: ['email']
      };

    })
  }*/

  /**
   * Signup page redirect
   */
  goToSignup(){
    this.nav.push(SignupPage);
  }

  /**
   * onChange update element
   * @param input
   */
  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }


/*  private _FBUserProfile() {
    return new Promise((resolve, reject) => {
      Facebook.api('me?fields=id,name,email,first_name,last_name', [])
        .then((profileData) => {
          console.log(JSON.stringify(profileData));
          return resolve(profileData);
        }, (err) => {
          console.log(JSON.stringify(err));
          return reject(err);
        })
    })
  }*/

}
