import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Summoner } from '../interfaces/Data_interface';

@Injectable()
export class DataService {
  constructor(private _http: HttpClient) {}

  Summoner(pseudo: string): Observable<Summoner> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
    return this._http.get<Summoner>(
      'http://localhost/wrush/symfony_wrush/web/app_dev.php/api/summoners/' + pseudo + '/by-name',
      httpOptions,
    );
  }
}
