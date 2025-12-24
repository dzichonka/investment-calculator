import { Component, computed, inject, Input, signal } from '@angular/core';
import { type AnnualData } from '../models/annual-data.model';
import { CurrencyPipe } from '@angular/common';
import { CalculationService } from '../services/calculation.service';

@Component({
  selector: 'app-results',
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  private calculationService = inject(CalculationService);
  public results = computed(() => this.calculationService.getResults());
}
