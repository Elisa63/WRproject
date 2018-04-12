import { Component, OnInit } from '@angular/core';
import { DataService, Champion, Summoner, MatchSummoner, SummonerInMatch } from '../data.service';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public lineChartData:Array<any> = [
   {data: [], label: 'SummonerGame'},
 ];
 public lineChartLabels:Array<any> = ['Game #', 'Game Type', 'Champion', 'Kills', 'Deaths', 'Assists',
 'Win' ];
  public lineChartOptions:any = {
    responsive: true
  };
  constructor() { }

  ngOnInit() {
  }

 public retrieveData(DataService, Champion, Summoner, MatchSummoner, SummonerInMatch ) {
    let retridata: [number, string, string, number, number, number, boolean ];
    for(let value of Summoner.summoner_in_matchs){
        value =+ 1;
        value.match_summoner.game_type;
        value.champion;
        value.kills;
        value.deaths;
        value.assists;
        value.win;
    }

    let data = retridata.splice(20, retridata.length - 1)
    return data;
}

}
