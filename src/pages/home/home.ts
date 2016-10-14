import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Pages
import { LoginPage } from '../../pages/login/login';

// Import Providers
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController, public authData: AuthData) {

  }

  logOut(){
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }

}
