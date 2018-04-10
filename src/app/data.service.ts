import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



export interface Champion {
id: number,
name: string,

}

export interface Game {
  id: number,
  api_url: string,
  name: string

}



export interface Summoner {
  id: string,
  summoner_name: string,
  account_id: number,
  profil_icon_id: string,
  level: number,
  league_point: number,
  season_tier: string,
  revision_date: DateTimeFormat[],
  user: string,
  summoner_in_matchs: SummonerInMatch[],
}

export interface MatchSummoner {
  id: string,
  game_type: string,
  game_creation: string[],
  participants_identities:string[]
  summoner_in_match: string[],
}


export interface SummonerInMatch {
  id: number,
  role: string,
  lane: string,
  win: boolean,
  kills: number,
  deaths: number,
  summoner: string,
  match_summoner: string,

}

export interface Winrate {
  summoner: Summoner,
  win: boolean,
  label: string,

}

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

 Summoner(pseudo: string): Observable<Summoner> {
   const httpOptions = {
     headers: new HttpHeaders({
       'Accept':  'application/json',
     }),
   };

    return this._http.get<Summoner>("http://localhost/Symfony_Wrush-master/web/app_dev.php/api/summoners/"+pseudo+"/by-name", httpOptions);
  }
}
