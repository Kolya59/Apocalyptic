import { Component, OnInit } from '@angular/core';
import { Statement } from '../../../core/models';
import { Store } from '../../../core/store/store';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {
  constructor(private readonly ruleStore: Store) {
    ruleStore.insertRule(
      'Rule 1',
      [
        new Statement(1, 'Premise 1', null),
        new Statement(2, 'Premise 2', null)
      ],
      [
        new Statement(1, 'Conclusion 1', null),
        new Statement(2, 'Conclusion 2', null)
      ],
      'Description 1'
    );
    ruleStore.insertRule(
      'Rule 2',
      [
        new Statement(3, 'Premise 3', null),
        new Statement(4, 'Premise 4', null)
      ],
      [
        new Statement(3, 'Conclusion 3', null),
        new Statement(4, 'Conclusion 4', null)
      ],
      'Description 2'
    );
    ruleStore.insertRule(
      'Rule 3',
      [
        new Statement(5, 'Premise 5', null),
        new Statement(6, 'Premise 6', null)
      ],
      [
        new Statement(5, 'Conclusion 5', null),
        new Statement(6, 'Conclusion 6', null)
      ],
      'Description 3'
    );
    ruleStore.insertRule(
      'Rule 4',
      [
        new Statement(7, 'Premise 7', null),
        new Statement(8, 'Premise 8', null)
      ],
      [
        new Statement(7, 'Conclusion 7', null),
        new Statement(8, 'Conclusion 8', null)
      ],
      'Description 4'
    );
  }

  ngOnInit() {
  }

  onClick(event: MouseEvent) {
    alert('Clicked ' + (event.target as HTMLElement).innerHTML);
  }

}
