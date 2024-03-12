import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() projects: any[] = [];
  @Output() reload: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
  }

  renderProject(url:string) {
    this.router.navigate([`project/${encodeURIComponent(url)}`]);
    this.reload.emit();
  }

}
