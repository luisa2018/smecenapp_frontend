import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Journey } from '../model/journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private baseUrl: string = 'http://localhost:8080/journeys'; // cambia puerto si es necesario

  constructor(private http: HttpClient) { }

  getAll(): Observable<Journey[]> {
    return this.http.get<Journey[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Journey> {
    return this.http.get<Journey>(`${this.baseUrl}/${id}`);
  }

  create(journey: Journey): Observable<Journey> {
    return this.http.post<Journey>(this.baseUrl, journey);
  }

  update(id: number, journey: Journey): Observable<Journey> {
    return this.http.put<Journey>(`${this.baseUrl}/${id}`, journey);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
