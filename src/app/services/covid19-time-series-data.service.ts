import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewDataCovid19USA } from '../models/dataCovid19EEUU.models';

@Injectable({
  providedIn: 'root'
})
export class Covid19TimeSeriesDataService {

  private URL: string = ' http://localhost:3000/dataCSV';

  constructor(
    private http: HttpClient
  ) { }

  public postData(data: {[key: string]: NewDataCovid19USA}){
    return this.http.post(this.URL,data);
  }

  public getData(){
    return this.http.get<{[key: string]: NewDataCovid19USA}[]>(this.URL)

  }
}
