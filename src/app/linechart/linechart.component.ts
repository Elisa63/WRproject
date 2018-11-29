import { Component, OnInit, Input } from "@angular/core";
import {
  DataService,
  Summoner,
  SummonerInMatch,
  MatchSummoner
} from "../data.service";
import { Chart } from "chart.js";
import { ChartsModule } from "ng2-charts";

@Component({
  selector: "app-linechart",
  templateUrl: "./linechart.component.html",
  styleUrls: ["./linechart.component.scss"]
})
export class LinechartComponent implements OnInit {
  @Input()
  public pseudo: string;

  public lineChartData: Array<number> = [];
  public lineChartLabels: Array<string> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.Summoner(this.pseudo).subscribe((res: Summoner) => {
      let i = 0;
      let j = 0;
      for (const value of res.summoner_in_matchs.slice(0, 20)) {
        const date = new Date(value.match_summoner.game_creation);
        this.lineChartLabels.unshift(date.toLocaleString());
        if (value.win === true) {
          i++;
        } else {
          i--;
        }
        j = j + i;
        this.lineChartData.unshift(j);
      }
    });
  }
}
