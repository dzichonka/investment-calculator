import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type DataInput } from '../models/data-input.model';
import { CalculationService } from '../services/calculation.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  private calculationService = inject(CalculationService);
  initialInvestment: string = '5000';
  annualInvestment: string = '1000';
  expectedReturn: string = '5';
  duration: string = '10';
  onSubmit(): void {
    this.calculationService.calculateInvestmentResults({
      initialInvestment: parseFloat(this.initialInvestment),
      annualInvestment: parseFloat(this.annualInvestment),
      expectedReturn: parseFloat(this.expectedReturn),
      duration: parseInt(this.duration),
    });
  }
}
