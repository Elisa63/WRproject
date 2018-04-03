import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  pseudo : string;


  constructor(ChartsComponent: ActivatedRoute) {
  const pseudo: Observable<string>= ChartsComponent.params.map(p => p.pseudo);

  pseudo.subscribe((pseudo: string) => {
    this.pseudo = pseudo;
  });

}

  ngOnInit() {

  }

}
