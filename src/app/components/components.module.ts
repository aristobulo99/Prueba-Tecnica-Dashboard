import { NgModule } from "@angular/core";
import { HeadboardComponent } from "./headboard/headboard.component";
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { AccumulatedCardComponent } from './accumulated-card/accumulated-card.component';
import { MostAffectedCardComponent } from './most-affected-card/most-affected-card.component';
import { DeathsVsTotalPopulationCardComponent } from './deaths-vs-total-population-card/deaths-vs-total-population-card.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule(
  {
    declarations:[
      HeadboardComponent,
      DragAndDropComponent,
      AccumulatedCardComponent,
      MostAffectedCardComponent,
      DeathsVsTotalPopulationCardComponent
    ],
    exports: [
      HeadboardComponent,
      DragAndDropComponent,
      AccumulatedCardComponent,
      MostAffectedCardComponent,
      DeathsVsTotalPopulationCardComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule
    ]
  }
)
export class ComponentsModule{}
