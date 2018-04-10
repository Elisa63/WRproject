import { Component, OnInit, Input } from '@angular/core';
import { DataService, SummonerInMatch, Summoner  } from '../data.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.scss']
})
export class RadarchartComponent implements OnInit {
  @Input() public pseudo: string;

  public radarChartLabels:string[] = ['TOP', 'jungle', 'Carry AP', 'Support', 'Carry AD'];

 public radarChartData:any = [

      {data: [], label: 'Winrate '},
 ];
 public radarChartType:string = 'radar';

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }




  constructor(private data : DataService) { }

    ngOnInit() {
      this.data.Summoner(this.pseudo)
        .subscribe((res: Summoner) => {
          console.log(res.summoner_in_matchs);



          let SummonerInMatch : Array<number>;
          for(let dataWinRate of SummonerInMatch res=> {
          dataWinRate.push("TOP")

          }



          this.radarChartData = [
            {data: summoner_in_match, label: 'Winrate '},
          ];

        })
    }
  }
