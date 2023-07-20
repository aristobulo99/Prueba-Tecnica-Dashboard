import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataCovid19USA, NewDataCovid19USA } from 'src/app/models/dataCovid19EEUU.models';
import { Covid19TimeSeriesDataService } from 'src/app/services/covid19-time-series-data.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {

  @ViewChild('inputfile',{static: true}) fileButton!: ElementRef
  private fileCSV: any;
  private convertToJson!: string;

  constructor(
    private covidTimeSeriesData: Covid19TimeSeriesDataService
  ){}

  public fileUploadButtonEvent(){
    this.fileButton.nativeElement.click();
  }

  public cumulativeOfDates(dateData: any[], objectData: DataCovid19USA){

    for(let datesOnly in objectData){
      if(new Date(datesOnly).toString() != "Invalid Date"){
        dateData[0][datesOnly] += objectData[datesOnly];
      }
    }
    return dateData;
  }

  public processingDates(state: string, newObject: {[key:string]: NewDataCovid19USA}){
    let newDates: {[key: string]: number} = {};
    newObject[state].newData.forEach(
      objectData => {
        for(let datesOnly in objectData){
          if(new Date(datesOnly).toString() != "Invalid Date"){
            newDates[datesOnly] = objectData[datesOnly];
          }
        }
        return newDates;
      }
    );
    return newDates
  }

  public processingInformation(dataCovidUSA: DataCovid19USA[]){
    let newObject: {[key:string]: NewDataCovid19USA} = {};
    dataCovidUSA.forEach(
      objectData => {

        if(newObject[objectData.Province_State]){
          newObject[objectData.Province_State].newData = this.cumulativeOfDates(newObject[objectData.Province_State].newData, objectData);
          //newObject[objectData.Province_State].newData.push(objectData)
          newObject[objectData.Province_State] = {
            Population: newObject[objectData.Province_State]['Population'] + objectData.Population,
            newData: newObject[objectData.Province_State].newData
          };
        }else{
          newObject[objectData.Province_State] = {
            Population: objectData.Population,
            newData: [objectData]
          };
          newObject[objectData.Province_State].newData = [this.processingDates(objectData.Province_State,newObject)];

        }
      }
    );
    return newObject;

  }

  public getJson(workBook: XLSX.WorkBook){
    workBook.SheetNames.forEach(
      sheet => {
        const data: DataCovid19USA[] = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);
        this.covidTimeSeriesData.postData(this.processingInformation(data)).subscribe(
          (respuesta) => {
            console.log(respuesta)
          }
        );
      }
    );
  }


  public readCsvFile(){
    const readFile = new FileReader();
    let objetoDeprueba: {[key: string]:any[]} = {"data":[]}
    readFile.readAsBinaryString(this.fileCSV);
    readFile.onloadend = (event) => {
      let binaryData = event.target?.result;
      let workBook = XLSX.read(binaryData,{type:'binary'});
      this.getJson(workBook);
    }
  }

  public uploadCsvFile(event: any){
    this.fileCSV = event.target.files[0];
    this.readCsvFile();
  }

  public onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('drag-over');
  }

  public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');
  }

  public onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');

    this.fileCSV = event.dataTransfer.files[0];
    if(this.fileCSV.type == 'text/csv'){
      this.readCsvFile();
    }else{
      alert("Archivo no valido");
    }
  }

}
