import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deaths-vs-total-population-card',
  templateUrl: './deaths-vs-total-population-card.component.html',
  styleUrls: ['./deaths-vs-total-population-card.component.scss']
})
export class DeathsVsTotalPopulationCardComponent {

  @Input() headerName!: string;

}
