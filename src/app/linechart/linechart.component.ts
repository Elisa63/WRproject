import { Component, OnInit } from '@angular/core';
import { DataService, Summoner } from '../data.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  public lineChartData:Array<any> = [
    {data: [], label:'Summoner' },
  ];
 public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },

  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';



  constructor(private data: DataService ) { }

  ngOnInit() {
    /*
    this.data.Summoner("")
      .subscribe((res: number[] ) => {
        console.log(res)

        this.lineChartData = [
          {data: res, label:[]},
        ];

      })
      */
  }
}
