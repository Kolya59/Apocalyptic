import { Component, Inject } from '@angular/core';
import { Store } from '../../../core/store';
import { ConsultationService } from '../../../core/service';
import { IVariable } from '../../../core/models';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

class Node {
  target: IVariable;
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
export class ExplanationComponent {

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private readonly store: Store,
    private readonly consultant: ConsultationService,
    private readonly dialogRef: MatDialogRef<ExplanationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVariable
) {
    this.dataSource.data = [];
    for (const result of consultant.targets) {
      const node = new Node();
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

  transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.target.name,
      level
    };
  };

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  close() {
    this.dialogRef.close();
  }
}
