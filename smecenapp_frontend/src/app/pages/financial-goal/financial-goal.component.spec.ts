import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialGoalComponent } from './financial-goal.component';

describe('FinancialGoalComponent', () => {
  let component: FinancialGoalComponent;
  let fixture: ComponentFixture<FinancialGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialGoalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
