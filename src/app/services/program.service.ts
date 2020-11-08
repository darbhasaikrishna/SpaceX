import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getPrograms(params) {
    if (params) {
      let httpParams = new HttpParams();
      for (const key in params) {
      httpParams= httpParams.append(key, params[key]);
      }
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100`, { params: httpParams })
    }
    else {
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100`)
    }
  }
}
