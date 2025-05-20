import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostVisibilityComponent } from './cost-visibility.component';

describe('CostVisibilityComponent', () => {
  let component: CostVisibilityComponent;
  let fixture: ComponentFixture<CostVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostVisibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
