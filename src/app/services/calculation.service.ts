import { Injectable, Input, signal } from '@angular/core';
import { type DataInput } from '../models/data-input.model';
import { type AnnualData } from '../models/annual-data.model';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  data = signal<AnnualData[]>([]);
  calculateInvestmentResults(data: DataInput): void {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.data.set(annualData);
  }

  getResults() {
    return this.data();
  }
}
