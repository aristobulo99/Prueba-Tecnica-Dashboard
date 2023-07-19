import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accumulated-card',
  templateUrl: './accumulated-card.component.html',
  styleUrls: ['./accumulated-card.component.scss']
})
export class AccumulatedCardComponent {

  @Input() headerName!: string;
  @Input() iconPath!: string;

}
