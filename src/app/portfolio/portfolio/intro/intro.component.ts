import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: false,
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  @Output() scrollToSkills: EventEmitter<void> = new EventEmitter<void>(); 
  @Output() scrollToProjects: EventEmitter<void> = new EventEmitter<void>();

  emitSignalSkills() {
    this.scrollToSkills.emit();
  }

  emitSignalProjects() {
    this.scrollToProjects.emit();
  }

  openGithub() {
    const newTab = window.open('https://github.com/IrishRixon/', '_blank');
    newTab!.opener = null;
    window.focus();
  }

  openLinkedIn() {
    const newTab = window.open('https://www.linkedin.com/in/irish-rixon-dela-pe%C3%B1a-656aa1340/', '_blank');
    newTab!.opener = null;
    window.focus();
  }
}
