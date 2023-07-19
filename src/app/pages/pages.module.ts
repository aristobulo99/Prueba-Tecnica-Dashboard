import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ComponentsModule } from "../components/components.module";

@NgModule(
  {
    declarations:[
      LoginComponent,
      FileUploadComponent
    ],
    imports: [
      ComponentsModule
    ],
    exports: [
      LoginComponent,
      FileUploadComponent
    ]
  }
)export class PagesModule{}
