import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headboard',
  templateUrl: './headboard.component.html',
  styleUrls: ['./headboard.component.scss']
})
export class HeadboardComponent {

  @Input() headerTitle!: string

}
