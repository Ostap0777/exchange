import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  amount1: number = 0;
  amount2: number = 0;

  currency1: string = 'UAH';
  currency2: string = 'USD';

  exchangeRates: { [key: string]: number } = {}; 

  constructor(private exchangeService: ServiceService) {}

  ngOnInit(): void {
    this.loadExchangeRates();
  }

  loadExchangeRates(): void {
    this.exchangeService.getCurrencies().subscribe((data) => {
      data.forEach((rate: any) => {
        this.exchangeRates[rate.cc] = rate.rate;
      });

      this.exchangeRates['UAH'] = 1;
      this.convertFromCurrency1();
    });
  }

  convertFromCurrency1(): void {
    if (this.amount1 < 0) {
      this.amount1 = 0;
    }
    this.amount2 = this.convertCurrency(this.amount1, this.currency1, this.currency2);
  }

  convertFromCurrency2(): void {
    if (this.amount2 < 0) {
      this.amount2 = 0;
    }
    this.amount1 = this.convertCurrency(this.amount2, this.currency2, this.currency1);
  }
  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    const rateFrom = this.exchangeRates[fromCurrency];
    const rateTo = this.exchangeRates[toCurrency];
    const converted = (amount * rateFrom) / rateTo;
    return parseFloat(converted.toFixed(2));
  }
}
