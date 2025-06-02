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
}
