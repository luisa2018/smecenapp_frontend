import { JourneyStatus } from "./journey-status.enum";

export interface Journey {
  idJourney?: number;
  name: string;
  description: string;
  context: string;
  status: JourneyStatus;
  createdAt?: string;
  updatedAt?: string;
}
