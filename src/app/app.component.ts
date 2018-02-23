import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyB1bd_OS4x21ICy0rc6L1ZlVHw0CRpWydQ',
      authDomain: 'ng-recipe-book-2018.firebaseapp.com',
    };
    firebase.initializeApp(config);
  }

}
