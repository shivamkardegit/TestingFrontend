import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectlistComponent } from './components/admin/projectlist/projectlist.component';
import { EmployeelistComponent } from './components/admin/employeelist/employeelist.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UpdatedetailsComponent } from './components/employee/updatedetails/updatedetails.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: '', redirectTo: '/role-selection', pathMatch: 'full' },
  {path:'role-selection', component: AppComponent},
  { path: 'admin', component: AdminComponent, children: [
    { path: 'projects', component: ProjectlistComponent },
    { path: 'employees', component: EmployeelistComponent }
  ]},
  { path: 'employee', component: EmployeeComponent, children: [
    { path: 'update-details', component: UpdatedetailsComponent }
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
