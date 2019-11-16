import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainListDialogComponent } from './domain-list-dialog.component';

describe('DomainsComponent', () => {
  let component: DomainListDialogComponent;
  let fixture: ComponentFixture<DomainListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
