import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  current: any; 

  isModalVisible: boolean = false;


  constructor(private service: ServiceService) { }

  ngOnInit(): void {
	this.isModalVisible = true;
  
  }
}
