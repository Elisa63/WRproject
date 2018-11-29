import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Summoner } from '../interfaces/Data_interface';

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

  constructor(public route: ActivatedRoute, private data: DataService) {
    route.params.subscribe(params => {
      this.pseudo = params.pseudo;
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
