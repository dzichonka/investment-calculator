import { Component, Input } from '@angular/core';
import { type AnnualData } from '../models/annual-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  @Input() results: AnnualData[] = [];
}
