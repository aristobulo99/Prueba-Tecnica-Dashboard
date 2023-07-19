import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ComponentsModule } from "../components/components.module";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule(
  {
    declarations:[
      LoginComponent,
      FileUploadComponent,
      DashboardComponent
    ],
    imports: [
      ComponentsModule
    ],
    exports: [
      LoginComponent,
      FileUploadComponent,
      DashboardComponent
    ]
  }
)export class PagesModule{}
