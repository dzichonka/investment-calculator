import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type DataInput } from './models/data-input.model';
import { type AnnualData } from './models/annual-data.model';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ResultsComponent,
    UserInputComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  annualData: AnnualData[] = [];
  calculateInvestmentResults(data: DataInput): void {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    const annualData: AnnualData[] = [];
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
    this.annualData = annualData;
  }
}
