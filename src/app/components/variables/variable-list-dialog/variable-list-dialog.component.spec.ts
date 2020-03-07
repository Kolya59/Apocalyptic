import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableListDialogComponent } from './variable-list-dialog.component';

describe('VariablesComponent', () => {
  let component: VariableListDialogComponent;
  let fixture: ComponentFixture<VariableListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
