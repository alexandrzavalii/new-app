import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';


// Import pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FavoritesPage } from '../pages/favorites/favorites';
import { MatchesPage } from '../pages/matches/matches';
import { NewsPage } from '../pages/news/news';
import { SocialPage } from '../pages/social/social';
import { TabsPage } from '../pages/tabs/tabs';

// Import providers
import { AuthData } from '../providers/auth-data'

// Import the AngularFire2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


// the AngularFire2 config
const firebaseConfig = {
  apiKey: "AIzaSyC5q-LU_uDO4w7Gi7ylpyj67BbF0KV3W9g",
  authDomain: "prosports-stage.firebaseapp.com",
  databaseURL: "https://prosports-stage.firebaseio.com",
  storageBucket: "prosports-stage.appspot.com",
  messagingSenderId: "258889516300"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FavoritesPage,
    MatchesPage,
    NewsPage,
    SocialPage,
    TabsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FavoritesPage,
    MatchesPage,
    NewsPage,
    SocialPage,
    TabsPage
  ],
  providers: [
    AuthData
  ]
})
export class AppModule {

}
