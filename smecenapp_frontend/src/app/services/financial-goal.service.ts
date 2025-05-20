import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialGoal } from '../model/financial-goal';

@Injectable({
  providedIn: 'root'
})
export class FinancialGoalService {
  private baseUrl = 'http://localhost:8080/financial-goals';

  constructor(private http: HttpClient) {}

  create(goal: FinancialGoal): Observable<FinancialGoal> {
    return this.http.post<FinancialGoal>(this.baseUrl, goal);
  }

  getById(id: number): Observable<FinancialGoal> {
    return this.http.get<FinancialGoal>(`${this.baseUrl}/${id}`);
  }

  update(id: number, goal: FinancialGoal): Observable<FinancialGoal> {
    return this.http.put<FinancialGoal>(`${this.baseUrl}/${id}`, goal);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
