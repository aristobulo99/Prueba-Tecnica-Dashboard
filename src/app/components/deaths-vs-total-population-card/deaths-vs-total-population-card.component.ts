import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Covid19TimeSeriesDataService } from 'src/app/services/covid19-time-series-data.service';
import Chart  from 'chart.js/auto'

@Component({
  selector: 'app-deaths-vs-total-population-card',
  templateUrl: './deaths-vs-total-population-card.component.html',
  styleUrls: ['./deaths-vs-total-population-card.component.scss']
})
export class DeathsVsTotalPopulationCardComponent implements OnInit {

  @Input() headerName!: string;

  protected formGroup!: FormGroup
  protected stateList: string[] = [];
  protected killList: number = 0;
  protected populationList: number = 0;
  protected defaultDate: string = '4/26/21';
  public chart: any;

  constructor(
    private covid19TimeSeriesData: Covid19TimeSeriesDataService
  ) { }





  ngOnInit(): void {
    this.generateReactiveForm();
    this.stateRequest();
    this.getInformation();

  }

  public generateReactiveForm() {
    this.formGroup = new FormGroup(
      {
        stateSelection: new FormControl('Alabama')
      }
    );
  }

  get getStateSelection() {
    return this.formGroup.get('stateSelection');
  }

  public stateRequest() {
    this.covid19TimeSeriesData.getData().subscribe(
      (result) => {
        result.forEach(
          objectData => {
            for (let state in objectData) {
              if (state != 'id') {
                this.stateList.push(state);
              }
            }
          }
        );
      }
    );
  }

  public getInformation() {
    this.covid19TimeSeriesData.getData().subscribe(
      (result) => {
        result.forEach(
          objectData => {
            for (let state in objectData) {
              if (state == this.getStateSelection?.value) {
                this.killList = ((objectData[state].newData[this.defaultDate] * 100) / objectData[state]['Population']);
                this.populationList = (objectData[state]['Population']);
              }
            }
          }
        );
        this.generateRingedCircleGraph();
      }
    );
  }

  public selectionEvent() {
    console.log(this.getStateSelection?.value);
    if (this.getStateSelection?.value != '') {
      this.chart.destroy()
      this.getInformation();
    } else {
      alert("Seleccione un estado");
    }
  }

  public generateRingedCircleGraph() {
    console.log(this.killList, this.populationList)
    this.chart = new Chart("MyChart", {
      type: 'doughnut',

      data: {
        labels: ['Procentage de muertes', 'Poblacion total'],
        datasets: [{
          label: 'My First Dataset',
          data: [this.killList, this.populationList],
          backgroundColor: [
            'red',
            'pink'
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }



}
