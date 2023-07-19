import { NgModule } from "@angular/core";
import { HeadboardComponent } from "./headboard/headboard.component";
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';


@NgModule(
  {
    declarations:[
      HeadboardComponent,
      DragAndDropComponent
    ],
    exports: [
      HeadboardComponent,
      DragAndDropComponent
    ]
  }
)
export class ComponentsModule{}
