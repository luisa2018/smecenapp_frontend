import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineArchitectureComponent } from './define-architecture.component';

describe('DefineArchitectureComponent', () => {
  let component: DefineArchitectureComponent;
  let fixture: ComponentFixture<DefineArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineArchitectureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefineArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
