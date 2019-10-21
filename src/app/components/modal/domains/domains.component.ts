import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IDomain } from '../../../core/models';
import { Store } from '../../../core/store/store';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {

  constructor(private readonly store: Store) {
    store.insertDomain('Domain 1', ['Value 1', 'Value 2']);
    store.insertDomain('Domain 2', ['Value 1', 'Value 2']);
    store.insertDomain('Domain 3', ['Value 1', 'Value 2']);
  }

  ngOnInit() {
  }

}
