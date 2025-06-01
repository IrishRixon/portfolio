import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  openPawfile() {
    const newTab = window.open('https://pawfile.netlify.app/', '_blank');
    newTab!.opener = null;
    window.focus();
  }
}
