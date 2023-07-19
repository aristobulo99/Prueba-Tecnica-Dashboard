import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ComponentsModule } from "../components/components.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule(
  {
    declarations:[
      LoginComponent,
      FileUploadComponent,
      DashboardComponent
    ],
    imports: [
      ComponentsModule,
      ReactiveFormsModule,
      CommonModule,
      FormsModule
    ],
    exports: [
      LoginComponent,
      FileUploadComponent,
      DashboardComponent
    ]
  }
)export class PagesModule{}
