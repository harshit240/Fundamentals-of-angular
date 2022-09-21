import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'brands',
    component:BrandsComponent
  },
  {
    path:'Ourteam',
    component:OurTeamComponent
  },
  {
    path:'pressrelease',
    component:PressReleaseComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'carers',
    component:CareersComponent
  },
  {
    path:'franschise',
    component:FranchiseComponent
  },
  {
    path:'view/:id',
    component:ViewComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  },
  {
    path:"blogview/:id",
    component:ViewEmployeeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
