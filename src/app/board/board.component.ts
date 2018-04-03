import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public lineChartData:Array<any> = [
   {data: [67, 59, 80, 81, 56, 55, 40, 30, 53, 60, 63, 70], label: 'Series A'},
   {data: [28, 48, 40, 19, 86, 27, 90, 50, 80,55, 66, 77, 65], label: 'Series B'},
 ];
 public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
 'august','september','october','november','december' ];
  public lineChartOptions:any = {
    responsive: true
  };




  constructor() { }

  ngOnInit() {
  }

}
