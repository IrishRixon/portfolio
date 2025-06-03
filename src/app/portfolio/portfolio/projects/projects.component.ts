import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @ViewChild('projects') skills!: ElementRef;
  @Output() section: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  openPawfile() {
    const newTab = window.open('https://pawfile.netlify.app/', '_blank');
    newTab!.opener = null;
    window.focus();
  }

  openARealty() {
    const newTab = window.open('https://amarquezrealty.netlify.app/', '_blank');
    newTab!.opener = null;
    window.focus();
  }

  ngAfterViewInit() {
    this.section.emit(this.skills);
  }  
}
