export interface FinancialGoal {
  id?: number;
  journeyId: number;
  estimatedBudget: number;
  monthlyLimit: number;
  optimizationPriority: string;
  evaluationPeriod: string;
}
