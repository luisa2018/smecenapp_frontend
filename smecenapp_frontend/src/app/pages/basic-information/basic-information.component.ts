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
  constructor(private journeyService: JourneyService) {}

  saveJourney() {
    this.journeyService.create(this.journey).subscribe({
      next: (res) => {
        console.log('Journey created:', res);
        // redirigir o mostrar mensaje
      },
      error: (err) => {
        console.error('Error saving journey', err);
      }
    });
  }

}
