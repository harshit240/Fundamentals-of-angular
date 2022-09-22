import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { DisplayTeamComponent } from './display-team/display-team.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DisplayTeamComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TeamRoutingModule
  ],
  exports:[DisplayTeamComponent]
})
export class TeamModule { }
