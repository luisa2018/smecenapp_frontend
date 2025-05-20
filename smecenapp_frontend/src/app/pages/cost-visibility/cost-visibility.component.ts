import { Component, OnInit } from '@angular/core';
import { INFRASTRUCTURE_COSTS } from '../../utils/infrastructure-costs';
import { Infrastructure } from '../../model/infrastructure';
import { InfrastructureService } from '../../services/infrastructure.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { CostBreakdownDialogComponent } from '../../shared/cost-breakdown-dialog/cost-breakdown-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cost-visibility',
  standalone: true,
  imports: [MatCardModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './cost-visibility.component.html',
  styleUrl: './cost-visibility.component.scss'
})
export class CostVisibilityComponent implements OnInit {
  infrastructure?: Infrastructure;
  costoTotal: number = 0;

  constructor(private infraService: InfrastructureService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const idInfra = Number(localStorage.getItem('infrastructureId'));

    if (idInfra) {
      this.infraService.getById(idInfra).subscribe({
        next: (data) => {
          this.infrastructure = data;
          this.costoTotal = this.calcularCostoTotal(data);
        },
        error: (err) => {
          console.error('Error cargando infraestructura:', err);
        }
      });
    } else {
      console.warn('No se encontró infrastructureId en localStorage');
    }
  }

  calcularCostoTotal(infra: Infrastructure): number {
    let total = 0;

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

    campos.forEach(cadena => {
      const items = cadena.split(',');
      items.forEach(key => {
        const costo = INFRASTRUCTURE_COSTS[key.trim()] || 0;
        total += costo;
      });
    });

    return total;
  }

  goBack(): void {
    history.back();
  }

  goNext(): void {
    console.log('Ir al siguiente paso...');
  }
  verDesglose() {
    this.dialog.open(CostBreakdownDialogComponent, {
      data: this.infrastructure,
      width: '450px'
    });
  }

}
