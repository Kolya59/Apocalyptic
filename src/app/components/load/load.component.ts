import { Component, OnInit } from '@angular/core';
import { App } from '../../models/app.interface';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  private saved: App[];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
      try {
        const maybeApp: App = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.saved.push(maybeApp);
      } catch (e) {
      }
    }
  }
}
