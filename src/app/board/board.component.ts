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
   {data: [], label: 'Series A'},
   {data: [], label: 'Series B'},
 ];
 public lineChartLabels:Array<any> = ['Game 20', 'Game Type', 'Champion', 'Kill', 'Deaths', 'Assists',
 'Win' ];
  public lineChartOptions:any = {
    responsive: true
  };




  constructor() { }

  ngOnInit() {
  }

}
