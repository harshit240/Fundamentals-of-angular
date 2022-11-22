import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatabModule } from './datab/datab.module';
import { EditComponent } from './edit/edit.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { EmployeeModule } from './employee/employee.module';
import { TeacherModule } from './teacher/teacher.module';
import { TeamModule } from './team/team.module';
import { View1Component } from './view1/view1.component';
import { ReactiveFormArrayComponent } from './reactive-form-array/reactive-form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ParentComponent } from './parent/parent.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BrandsComponent,
    OurTeamComponent,
    PressReleaseComponent,
    ContactComponent,
    CareersComponent,
    FranchiseComponent,
    CarouselComponent,
    EditComponent,
    IfComponent,
    ForComponent,
    SwitchComponent,
    ChildComponent,
    PipeComponent,
    ApiComponent,
    NewsapiComponent,
    View1Component,
    ReactiveFormArrayComponent,
    ViewchildComponent,
    ParentComponent,
    ObservableComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    
  ],
  imports: [
    BrowserModule,
    DatabModule,
    EmployeeModule,
    ReactiveFormsModule,
    HttpClientModule,
    TeacherModule,
    TeamModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }