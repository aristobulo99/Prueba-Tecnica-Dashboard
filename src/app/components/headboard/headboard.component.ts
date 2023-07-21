import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headboard',
  templateUrl: './headboard.component.html',
  styleUrls: ['./headboard.component.scss']
})
export class HeadboardComponent {

  @Input() headerTitle!: string

  constructor(
    private router: Router
  ){}

  public signOff(){
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

}
