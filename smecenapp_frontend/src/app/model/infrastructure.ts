export interface Infrastructure {
  id?: number;
  journeyId: number;
  environmentTypes: string;
  paymentModels: string;
  applicationTypes: string;
  computeServices: string;
  databaseServices: string;
  storageServices: string;
  networkSecurity: string;
  monitoringServices: string;
}
