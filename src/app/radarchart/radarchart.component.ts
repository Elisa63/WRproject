import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.scss']
})
export class RadarchartComponent implements OnInit {
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

 public radarChartData:any = [
   {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
   {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
 ];
 public radarChartType:string = 'radar';

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }


  constructor() { }

  ngOnInit() {
  }

}
