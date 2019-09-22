import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesConclusionsComponent } from './rules-conclusions.component';

describe('RulesConclusionsComponent', () => {
  let component: RulesConclusionsComponent;
  let fixture: ComponentFixture<RulesConclusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesConclusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesConclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
