import { Component, OnInit, Input } from '@angular/core';
import { DataService, Champion, Summoner, MatchSummoner, SummonerInMatch } from '../data.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() public pseudo: string;
  public lineChartData:Array<any> = [
   {data: [] , label: 'SummonerGame'},
 ];
 public lineChartLabels:Array<any> = ['Game Type', 'Champion', 'Kills', 'Deaths', 'Assists', 'Win' ];
  public lineChartOptions:any = {
    responsive: true
  };
  constructor(private data: DataService) { }

  ngOnInit() {

      /*this.data.Summoner(this.pseudo)
          .subscribe((res: Summoner) => {
              let retrieveData: [] = [] ;

              for(let value of res.summoner_in_matchs.slice(0, 20)){
                  let data: [] = [];
                  data.push(value.match_summoner.game_type);
                  data.push(value.champion.name);
                  data.push(value.kills);
                  data.push(value.deaths);
                  data.push(value.assists);
                  data.push(value.win);
                  retrieveData.push(data);
              }
              console.log(retrieveData);
              this.lineChartData = [
                  {data: retrieveData, label: 'Stats'}
              ];

          })*/
    };
}
