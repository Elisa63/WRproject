import { Component, OnInit } from '@angular/core';
import { DataService, Summoner } from '../data.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  pseudo: string;
  level: number;
  revisionDate: string;
  profilIcon: string;

  constructor(private route: ActivatedRoute, private data: DataService) {
    route.params.map(p => p.pseudo).subscribe(pseudo => {
      this.pseudo = pseudo;
    });
  }

  ngOnInit() {
    this.data.Summoner(this.pseudo).subscribe((res: Summoner) => {
      this.level = res.level;
      const date = new Date(res.revision_date);
      this.revisionDate = date.toLocaleString();
      this.profilIcon = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/' + res.profil_icon_id + '.png';
    });
  }
}
