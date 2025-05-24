import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ButtonModule } from 'primeng/button';
import { IntroComponent } from './portfolio/intro/intro.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectsComponent } from "./portfolio/projects/projects.component";


@NgModule({
  declarations: [
    PortfolioComponent,
    IntroComponent,
    SkillsComponent
  ],
  imports: [
    PortfolioRoutingModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    ProjectsComponent
]
})
export class PortfolioModule { }
