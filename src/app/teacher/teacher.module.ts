import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ViewComponent } from './view/view.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViewComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    HttpClientModule
  ],
  exports:[DisplayComponent]

})
export class TeacherModule { }
