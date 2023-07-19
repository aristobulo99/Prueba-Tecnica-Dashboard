import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-most-affected-card',
  templateUrl: './most-affected-card.component.html',
  styleUrls: ['./most-affected-card.component.scss']
})
export class MostAffectedCardComponent {

  @Input() headerName!: string;

}
