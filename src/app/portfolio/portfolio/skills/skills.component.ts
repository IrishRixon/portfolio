import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @ViewChild('skills') skills!: ElementRef;
  @Output() section: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  ngAfterViewInit() {
    this.section.emit(this.skills);
  }  
}
