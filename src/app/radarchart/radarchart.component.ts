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

          let dataWinrate: Array<number> = [];

          let x: number = 0;
          let y: number = 0;
          let z: number = 0;
          let a: number = 0;
          let b: number = 0;


          for(let values of res.summoner_in_matchs ) {
            console.log(values);

            if(values.role == "SOLO" || values.lane == "TOP" && values.win == true){
              x++;
            }
            if( values.role == "SOLO" || values.lane == "JUNGLE" && values.win == true){
              y++;
            }
            if( values.role == "SOLO" || values.lane == "MID" && values.win == true)   {
              z++;
            }
            if(values.role == "DUO_SUPPORT" || values.lane == "BOTTOM" && values.win == true){
              a++;
            }
            if(values.role == "DUO_CARRY" || values.lane == "BOTTOM" && values.win == true){
              b++;
            }
          }

          dataWinrate.push(x);
          dataWinrate.push(y);
          dataWinrate.push(z);
          dataWinrate.push(a);
          dataWinrate.push(b);

          this.radarChartData = [
            {data: dataWinrate, label: 'Winrate '},
          ];

        })
    };
}
