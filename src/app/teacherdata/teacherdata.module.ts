import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { DisplayComponent } from './display/display.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    ViewComponent,
    DisplayComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DisplayComponent,EditComponent]
})
export class TeacherdataModule { }
