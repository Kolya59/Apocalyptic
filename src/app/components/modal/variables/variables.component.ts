import { Component, OnInit } from '@angular/core';
import { Domain } from '../../../core/models';
import { Store } from '../../../core/store/store';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  constructor(private store: Store) {
    store.insertVariable('Variable 1', new Domain(1, 'Domain 1', []));
    store.insertVariable('Variable 2', new Domain(2, 'Domain 2', []));
    store.insertVariable('Variable 3', new Domain(3, 'Domain 3', []));
  }

  ngOnInit() {
  }

}
