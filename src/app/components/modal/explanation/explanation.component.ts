import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '../../../core/store';
import { ConsultationService } from '../../../core/service';
import { Variable } from '../../../core/models';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

class Node {
  target: Variable;
  value: string | null;
  children?: Node[];
}

class FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent implements OnInit {
  private transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.target.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private readonly store: Store,
    private readonly consultant: ConsultationService,
    private readonly dialogRef: MatDialogRef<ExplanationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Variable
) {
    this.dataSource.data = [];
    for (let result of consultant.targets) {
      let node = new Node();
      node.target = result.var;
      node.value = result.val;
      store.rules.filter(
        rule => rule.conclusions.filter(
          conclusion => conclusion.variable === node.target
        ).length !== 0
      );
      node.children = [];
      this.dataSource.data.push(node);
    }
  }

  ngOnInit() {
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  close() {
    this.dialogRef.close();
  }
}
