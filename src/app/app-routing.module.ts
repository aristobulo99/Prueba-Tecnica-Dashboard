import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authenticatedOnlyGuard } from './guards/authenticated-only.guard';
import { fileControlGuard } from './guards/file-control.guard';
import { dashboardControlGuard } from './guards/dashboard-control.guard';
import { loginControlGuard } from './guards/login-control.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginControlGuard]
  },
  {
    path: 'fileUpload',
    component: FileUploadComponent,
    canActivate: [authenticatedOnlyGuard, dashboardControlGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authenticatedOnlyGuard, fileControlGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
