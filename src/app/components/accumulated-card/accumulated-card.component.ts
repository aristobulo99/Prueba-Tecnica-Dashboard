import { Component, Input, OnInit } from '@angular/core';
import { Covid19TimeSeriesDataService } from 'src/app/services/covid19-time-series-data.service';

@Component({
  selector: 'app-accumulated-card',
  templateUrl: './accumulated-card.component.html',
  styleUrls: ['./accumulated-card.component.scss']
})
export class AccumulatedCardComponent implements OnInit{

  @Input() headerName!: string;
  @Input() iconPath!: string;


  protected nameState: string = '';
  protected maxValue: number = 0;
  protected maxValueString: string = '';

  protected selectedDate: string = '4/26/21'

  constructor(
    private covid19TimeSriesDataServices: Covid19TimeSeriesDataService
  ){}

  ngOnInit(): void {
    if(this.headerName == 'Menor Acumulado'){
      this.cumulativeMinor();
    }else{
      this.cumulativeMajor();
    }
  }

  public cumulativeMajor(){
    let dynamicObject: {[key: string]: number} = {};
    this.maxValue = 0;
    this.nameState = '';
    this.covid19TimeSriesDataServices.getDataCumulativeMajor().subscribe(
      (result) => {

        result.forEach(
          objectData => {

            for(let i in objectData){
              if(typeof(objectData[i]) != 'number'){
                dynamicObject[i] = objectData[i].newData[this.selectedDate];
              }

            }
            const dataArray = Object.entries(dynamicObject);

            for (const [name, value] of dataArray) {
              if (value > this.maxValue) {
                this.maxValue = value ;
                this.nameState = name;
              }
            }

            this.maxValueString = Intl.NumberFormat("de-DE").format(this.maxValue);
          }
        );
      }
    );
  }

  public cumulativeMinor(){
    let dynamicObject: {[key: string]: number} = {};
    this.maxValue = Number.MAX_SAFE_INTEGER;
    this.nameState = '';
    this.covid19TimeSriesDataServices.getDataCumulativeMajor().subscribe(
      (result) => {

        result.forEach(
          objectData => {

            for(let i in objectData){
              if(typeof(objectData[i]) != 'number'){
                dynamicObject[i] = objectData[i].newData[this.selectedDate];
              }

            }
            const dataArray = Object.entries(dynamicObject);

            for (const [name, value] of dataArray) {
              if (value < this.maxValue) {
                this.maxValue = value ;
                this.nameState = name;
              }
            }
            this.maxValueString = Intl.NumberFormat("de-DE").format(this.maxValue);
          }
        );
      }
    );
  }

  public eventInputDate(event: any){

    const date = new Date(event.target.value);
    const day = date.getDate()+1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;
    this.selectedDate = month+"/"+day+"/"+year;


    if(this.headerName == 'Menor Acumulado'){
      this.cumulativeMinor();
    }else{
      this.cumulativeMajor();
    }
  }



}
