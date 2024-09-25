import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

	private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

	constructor(private http: HttpClient) { }
 
	getCurrencies(): Observable<any> {
	  return this.http.get(this.apiUrl);
	}
}
