import { NgModule } from "@angular/core";
import { HeadboardComponent } from "./headboard/headboard.component";
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { AccumulatedCardComponent } from './accumulated-card/accumulated-card.component';


@NgModule(
  {
    declarations:[
      HeadboardComponent,
      DragAndDropComponent,
      AccumulatedCardComponent
    ],
    exports: [
      HeadboardComponent,
      DragAndDropComponent,
      AccumulatedCardComponent
    ]
  }
)
export class ComponentsModule{}
