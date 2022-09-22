import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    ViewComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[EditComponent]
})
export class TeacherdataModule { }
