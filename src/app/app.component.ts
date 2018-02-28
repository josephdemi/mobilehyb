import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      const firebaseConfig = {
		apiKey: "AIzaSyAx0LBU2CtgDjW0hdIxVOb63UgIrcUXhlA",
    authDomain: "mobilehybridapp.firebaseapp.com",
    databaseURL: "https://mobilehybridapp.firebaseio.com",
    projectId: "mobilehybridapp",
    storageBucket: "mobilehybridapp.appspot.com",
    messagingSenderId: "956729063754"

      };

      firebase.initializeApp(firebaseConfig);
    });
  }
}
