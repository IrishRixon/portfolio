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
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { RippleModule } from 'primeng/ripple';
import { ContactComponent } from './portfolio/contact/contact.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@NgModule({
  declarations: [
    PortfolioComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    PortfolioRoutingModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    ScrollPanelModule,
    RippleModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    IftaLabelModule,
    TextareaModule,
    ReactiveFormsModule,
    FormsModule,
    AnimateOnScrollModule
]
})
export class PortfolioModule { }
