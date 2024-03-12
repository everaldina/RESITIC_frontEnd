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
  activeDiv: string | null = null;

  constructor(private router: Router) {
  }

  onClick(url:string, name:string) {
    this.toggleActive(name);
    this.router.navigate([`project/${encodeURIComponent(url)}`]);
    this.reload.emit();
  }


  toggleActive(div: string) {
    if (this.activeDiv != div)
      this.activeDiv = div;

  }

}
