import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  skills!: ElementRef;
  projects!: ElementRef;

  setSkills(skills: ElementRef) {
    this.skills = skills; 
    console.log(this.skills);
    
  }

  setProjects(projects: ElementRef) {
    this.projects = projects; 
    console.log(this.projects);

  }

  scrollToSkills() { 
    this.skills.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  scrollToProjects() { 
    this.projects.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
