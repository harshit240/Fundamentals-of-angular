import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InterpolationBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    TwowayBindingComponent,
    EventBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[InterpolationBindingComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
  ]
})
export class DatabModule { }
