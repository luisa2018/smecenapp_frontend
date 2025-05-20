import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JourneyContextService {

  private readonly key = 'journeyId';

  constructor() {}

  setJourneyId(id: number): void {
    localStorage.setItem(this.key, id.toString());
  }

  getJourneyId(): number | null {
    const value = localStorage.getItem(this.key);
    return value ? Number(value) : null;
  }

  clearJourneyId(): void {
    localStorage.removeItem(this.key);
  }

  hasJourney(): boolean {
    return this.getJourneyId() !== null;
  }
}
