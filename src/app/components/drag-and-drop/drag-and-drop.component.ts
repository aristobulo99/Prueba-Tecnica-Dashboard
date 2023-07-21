import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataCovid19USA, NewDataCovid19USA } from 'src/app/models/dataCovid19EEUU.models';
import { Covid19TimeSeriesDataService } from 'src/app/services/covid19-time-series-data.service';
import { EventEmitService } from 'src/app/services/event-emit.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {

  @ViewChild('inputfile',{static: true}) fileButton!: ElementRef
  private fileCSV: any;



  constructor(
    private covidTimeSeriesData: Covid19TimeSeriesDataService,
    private uploadFileEvent: EventEmitService,
    private router: Router
  ){
  }

  public fileUploadButtonEvent(){
    this.fileButton.nativeElement.click();
  }

  public cumulativeOfDates(dateData: {[key: string]: number}, objectData: DataCovid19USA){

    for(let datesOnly in objectData){
      if(new Date(datesOnly).toString() != "Invalid Date"){
        dateData[datesOnly] += objectData[datesOnly];
      }
    }
    return dateData;
  }

  public processingDates(objectData: DataCovid19USA){
    let newDates: {[key: string]: number} = {};
    for(let datesOnly in objectData){
      if(new Date(datesOnly).toString() != "Invalid Date"){
        newDates[datesOnly] = objectData[datesOnly]
      }
    }
    return newDates;
  }

  public processingInformation(dataCovidUSA: DataCovid19USA[]){
    let newObject: {[key:string]: NewDataCovid19USA} = {};
    dataCovidUSA.forEach(
      objectData => {

        if(newObject[objectData.Province_State]){
          newObject[objectData.Province_State].newData = this.cumulativeOfDates(newObject[objectData.Province_State].newData, objectData);
          newObject[objectData.Province_State] = {
            Population: newObject[objectData.Province_State]['Population'] + objectData.Population,
            newData: newObject[objectData.Province_State].newData
          };
        }else{
          newObject[objectData.Province_State] = {
            Population: objectData.Population,
            newData: this.processingDates(objectData)
          };


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
          () => {
            localStorage.setItem('fileCSV', 'existData');
            this.router.navigate(['dashboard']);
          }
        );
      }
    );
  }


  public readCsvFile(){
    this.uploadFileEvent.uploadingFile.emit();
    const readFile = new FileReader();

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
