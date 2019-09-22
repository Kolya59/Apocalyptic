import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainOperationsComponent } from './domain-operations.component';

describe('DomainOperationsComponent', () => {
  let component: DomainOperationsComponent;
  let fixture: ComponentFixture<DomainOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
