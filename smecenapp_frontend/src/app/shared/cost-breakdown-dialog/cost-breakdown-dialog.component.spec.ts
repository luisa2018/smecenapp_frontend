import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostBreakdownDialogComponent } from './cost-breakdown-dialog.component';

describe('CostBreakdownDialogComponent', () => {
  let component: CostBreakdownDialogComponent;
  let fixture: ComponentFixture<CostBreakdownDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostBreakdownDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostBreakdownDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
