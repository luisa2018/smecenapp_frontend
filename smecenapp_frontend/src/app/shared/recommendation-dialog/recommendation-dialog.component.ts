import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-recommendation-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatListModule],
  templateUrl: './recommendation-dialog.component.html',
  styleUrls: ['./recommendation-dialog.component.scss']
})
export class RecommendationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) {}

}
