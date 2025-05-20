import { FinancialGoal } from './../../model/financial-goal';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { JourneyService } from '../../services/journey.service';
import { Journey } from '../../model/journey';
import { JourneyStatus } from '../../model/journey-status.enum';
import { Router } from '@angular/router';
import { JourneyContextService } from '../../services/journey-context.service';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss'
})
export class BasicInformationComponent {
  journey: Journey = {
    name: '',
    description: '',
    context: '',
    status: JourneyStatus.DRAFT
  };
  constructor(private journeyService: JourneyService, private router: Router, private journeyContext: JourneyContextService) { }

  saveJourney() {
    this.journeyService.create(this.journey).subscribe({
      next: (res) => {
        if (res.idJourney) {
          this.journeyContext.setJourneyId(res.idJourney); // ✅ guarda en localStorage
          this.router.navigate(['/financial-goal']);
        } else {
          console.error('idJourney no disponible en la respuesta');
        }
      },
      error: (err) => {
        console.error('Error saving journey', err);
      }
    });
  }

}
