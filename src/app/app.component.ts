import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

// Import Pages
import { LoginPage } from '../pages/login/login';
import { TabsPage } from  '../pages/tabs/tabs';


// Import AngularFire2
import { AngularFire } from 'angularfire2';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, af: AngularFire) {

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.rootPage = TabsPage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
