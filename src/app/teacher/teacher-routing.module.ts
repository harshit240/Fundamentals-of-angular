import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:DisplayComponent
  // },
  // {
  //   path:"teacher_view/:id",
  //   component:ViewTeacherComponent
  // },
  // {
  //   path:"teacher_edit/:id",
  //   component:EditTeacherComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
