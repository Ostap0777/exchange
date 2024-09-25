import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
	usdRate: number = 0;
	euroRate: number = 0;
 
	constructor(private service: ServiceService) {}
 
	ngOnInit(): void {
	  this.service.getCurrencies().subscribe((data) => {
		 const usd = data.find((item: any) => item.cc === 'USD');
		 const euro = data.find((item: any) => item.cc === 'EUR');
		 
		 this.usdRate = parseFloat(usd.rate.toFixed(2));
		 this.euroRate = parseFloat(euro.rate.toFixed(2));
	  });
	}
}
