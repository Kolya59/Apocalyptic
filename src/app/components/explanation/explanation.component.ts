import { Component, Inject, OnInit } from '@angular/core';
import { ConsultationService } from '../../services/service';
import { Variable } from '../../models/variable';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
export class ExplanationComponent {
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private readonly consultant: ConsultationService,
    private readonly dialogRef: MatDialogRef<ExplanationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Variable
  ) {
    this.dataSource.data = [];
    for (const result of consultant.targets) {
      const node = new Node();
      node.target = result.var;
      node.value = result.val;
      // TODO: Restore
      // store.rules.filter(rule => rule.conclusions.filter(conclusion => conclusion.variable === node.target).length !== 0);
      node.children = [];
      this.dataSource.data.push(node);
    }
  }

  private transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.target.name,
      level
    };
  };

  treeFlattener = new MatTreeFlattener(
    // @ts-ignore
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  hasChild = (_: number, node: FlatNode) => node.expandable;

  close() {
    this.dialogRef.close();
  }
}
