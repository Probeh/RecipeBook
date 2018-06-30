import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB1uFm5npiAUyLUN02kxQClbWp-l2_86mw",
      authDomain: "clientpanel-e8dc1.firebaseapp.com"
    });
  }

  public onNavigate(feature: string) {
    this.loadedFeature = feature;
    
  }
}
