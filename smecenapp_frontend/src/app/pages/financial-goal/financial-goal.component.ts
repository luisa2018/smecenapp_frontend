import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FinancialGoalService } from '../../services/financial-goal.service';
import { FinancialGoal } from '../../model/financial-goal';

@Component({
  selector: 'app-financial-goal',
  standalone: true,
  templateUrl: './financial-goal.component.html',
  styleUrls: ['./financial-goal.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class FinancialGoalComponent implements OnInit {
  goal: FinancialGoal = {
    journeyId: 0,
    estimatedBudget: 0,
    monthlyLimit: 0,
    optimizationPriority: '',
    evaluationPeriod: ''
  };

  constructor(private service: FinancialGoalService, private router: Router) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('journeyId');
    if (stored) {
      this.goal.journeyId = Number(stored);
    } else {
      console.warn('No se encontró journeyId en localStorage');
    }
  }

  goBack() {
    this.router.navigate(['/basic-information']);
  }

  saveGoal() {
    this.service.create(this.goal).subscribe({
      next: (res) => {
        console.log('Objetivos financieros guardados:', res);
        this.router.navigate(['/define-architecture']);
      },
      error: (err) => {
        console.error('Error guardando objetivos financieros:', err);
        alert('Hubo un error al guardar');
      }
    });
  }
}
