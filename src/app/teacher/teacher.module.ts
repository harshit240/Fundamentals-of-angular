import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewTeacherComponent,
    DisplayComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TeacherRoutingModule,
  ],
  exports:[
    DisplayComponent,
    EditTeacherComponent,
    ViewTeacherComponent
  ]
})
export class TeacherModule { }
