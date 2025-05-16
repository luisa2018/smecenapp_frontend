import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Infrastructure } from '../model/infrastructure';

@Injectable({
  providedIn: 'root'
})
export class InfrastructureService {
  private baseUrl = 'http://localhost:8080/infrastructure';

  constructor(private http: HttpClient) {}

  // Crear infraestructura
  create(data: Infrastructure): Observable<Infrastructure> {
    return this.http.post<Infrastructure>(this.baseUrl, data);
  }

  // Obtener todas las infraestructuras
  getAll(): Observable<Infrastructure[]> {
    return this.http.get<Infrastructure[]>(this.baseUrl);
  }

  // Obtener una infraestructura por ID
  getById(id: number): Observable<Infrastructure> {
    return this.http.get<Infrastructure>(`${this.baseUrl}/${id}`);
  }

  // Actualizar una infraestructura
  update(id: number, data: Infrastructure): Observable<Infrastructure> {
    return this.http.put<Infrastructure>(`${this.baseUrl}/${id}`, data);
  }

  // Eliminar una infraestructura
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
