import { Component, Input, OnInit } from '@angular/core';
import { Covid19TimeSeriesDataService } from 'src/app/services/covid19-time-series-data.service';

@Component({
  selector: 'app-most-affected-card',
  templateUrl: './most-affected-card.component.html',
  styleUrls: ['./most-affected-card.component.scss']
})
export class MostAffectedCardComponent implements OnInit{

  @Input() headerName!: string;

  protected nameState: string = '';
  protected maxValue: number = 0;
  protected maxValueString: string = '';
  protected populati: string = '';
  protected accumul: string = '';


  constructor(
    private Covid19TimeSerieData: Covid19TimeSeriesDataService
  ){}

  ngOnInit(): void {
    this.moreAffected();
  }

  public moreAffected(){

    let dynamicObject: {[key: string]: number }= {};
    let dynamicObjectAux: {[key: string]: {population: number,accumulated: number} }= {};
    this.Covid19TimeSerieData.getData().subscribe(
      (result) => {
        result.forEach(
          objectData => {
            for(let state in objectData){
              if(typeof(objectData[state]) != 'number' && objectData[state]['Population'] > 0){
                dynamicObject[state] = (objectData[state].newData['4/26/21']*100)/objectData[state]['Population'];

                dynamicObjectAux[state] ={
                  population: objectData[state]['Population'],
                  accumulated: objectData[state].newData['4/26/21']
                }
              }
            }

            const dataArray = Object.entries(dynamicObject);

            for (const [name, value] of dataArray) {
              if (value > this.maxValue) {
                this.maxValue = value ;
                this.nameState = name;
              }
            }

            this.maxValueString = this.maxValue.toFixed(3);
            this.populati = Intl.NumberFormat("de-DE").format(dynamicObjectAux[this.nameState]['population']);
            this.accumul = Intl.NumberFormat("de-DE").format(dynamicObjectAux[this.nameState]['accumulated']);
          }
        );
      }
    );
  }
}
