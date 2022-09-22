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
import { TeacherdataModule } from './teacherdata/teacherdata.module';
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
    
  ],
  imports: [
    BrowserModule,
    DatabModule,
    TeacherdataModule,
    EmployeeModule,
    HttpClientModule,
    TeacherModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
