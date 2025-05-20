import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InfrastructureService } from '../../services/infrastructure.service';
import { Infrastructure } from '../../model/infrastructure';
import { OnInit } from '@angular/core';
import { JourneyContextService } from '../../services/journey-context.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecommendationDialogComponent } from '../../shared/recommendation-dialog/recommendation-dialog.component';





@Component({
  selector: 'app-define-architecture',
  templateUrl: './define-architecture.component.html',
  styleUrl: './define-architecture.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule
  ]
})
export class DefineArchitectureComponent implements OnInit {
  journeyId: number = 0;

  ngOnInit(): void {
    const id = this.journeyContext.getJourneyId(); // ✅
    if (id) {
      this.journeyId = id;
    } else {
      console.warn('No se encontró journeyId en contexto');
      this.router.navigate(['/basic-information']);
    }
  }
  infra = {
    entorno: { dev: false, test: false, prod: false },
    pago: { ondemand: false, reservadas: false, spot: false },
    tipoAplicacion: { basica: false, escalable: false, altaDisponibilidad: false },
    computo: { ec2: false, fargate: false, eks: false },
    db: { rds: false, dynamo: false, elasticache: false },
    storage: { s3: false, cloudfront: false },
    red: { waf: false, elb: false, vpc: false, subnets: false },
    seguridad: { guardduty: false, cloudwatch: false, config: false }
  };

  constructor(
    private infraService: InfrastructureService,
    private router: Router, private journeyContext: JourneyContextService,
    private dialog: MatDialog
  ) { }

  goBack() {
    this.router.navigate(['/cost-visibility']);
  }


  private toCommaList(obj: any): string {
    return Object.entries(obj)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(',');
  }

 saveInfrastructure() {
  const payload: Infrastructure = {
    journeyId: this.journeyId,
    environmentTypes: this.toCommaList(this.infra.entorno),
    paymentModels: this.toCommaList(this.infra.pago),
    applicationTypes: this.toCommaList(this.infra.tipoAplicacion),
    computeServices: this.toCommaList(this.infra.computo),
    databaseServices: this.toCommaList(this.infra.db),
    storageServices: this.toCommaList(this.infra.storage),
    networkSecurity: this.toCommaList(this.infra.red),
    monitoringServices: this.toCommaList(this.infra.seguridad)
  };

  this.infraService.create(payload).subscribe({
    next: (res) => {
      console.log('Infraestructura guardada:', res);
      localStorage.setItem('infrastructureId', res.id!.toString()); // 👉 Guarda el ID
      this.router.navigate(['/cost-visibility']); // 👉 Redirige
    },
    error: (err) => {
      console.error('Error al guardar infraestructura:', err);
      alert('Hubo un error al guardar');
    }
  });
}
  generarRecomendaciones() {
    const payload: Infrastructure = {
      journeyId: this.journeyId,
      environmentTypes: this.toCommaList(this.infra.entorno),
      paymentModels: this.toCommaList(this.infra.pago),
      applicationTypes: this.toCommaList(this.infra.tipoAplicacion),
      computeServices: this.toCommaList(this.infra.computo),
      databaseServices: this.toCommaList(this.infra.db),
      storageServices: this.toCommaList(this.infra.storage),
      networkSecurity: this.toCommaList(this.infra.red),
      monitoringServices: this.toCommaList(this.infra.seguridad),
    };

    this.infraService.getRecommendations(payload).subscribe({
      next: (res) => {
        const recomendaciones = res ?? []; // asegura que no sea undefined/null
        this.dialog.open(RecommendationDialogComponent, {
          data: recomendaciones,
          width: '500px'
        });
      },
      error: (err) => {
        console.error('Error obteniendo recomendaciones:', err);
        alert('No se pudieron generar las recomendaciones.');
      }
    });
  }

}
