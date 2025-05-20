import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { INFRASTRUCTURE_COSTS } from '../../utils/infrastructure-costs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-cost-breakdown-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './cost-breakdown-dialog.component.html',
  styleUrls: ['./cost-breakdown-dialog.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CostBreakdownDialogComponent {
  breakdown: { nombre: string; costo: number }[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.generarDesglose(data);
  }

  generarDesglose(infra: any) {
    const campos = [
      infra.environmentTypes,
      infra.paymentModels,
      infra.applicationTypes,
      infra.computeServices,
      infra.databaseServices,
      infra.storageServices,
      infra.networkSecurity,
      infra.monitoringServices
    ];

    campos.forEach((cadena: string) => {
      if (!cadena) return;
      const items = cadena.split(',');
      items.forEach((key: string) => {
        const nombre = key.trim();
        const costo = INFRASTRUCTURE_COSTS[nombre] || 0;
        this.breakdown.push({ nombre, costo });
      });
    });
  }

}
