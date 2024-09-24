import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

	url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5'
  constructor(private http: HttpClient) { }

  getAll() {
	return this.http.get(this.url)
  }
}
