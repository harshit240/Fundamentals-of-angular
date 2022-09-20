import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    DisplayEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[DisplayEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent]
  
})
export class EmployeeModule { }
