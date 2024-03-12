import { Component } from '@angular/core';
import { ReloadFrameService } from './reload-frame.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P009';
  projectList = [
      {
        name: "P008",
        url: "https://resitic-feb-p008.web.app/"
      },
      {
        name: "P012",
        url: "https://resitic-feb-p012.web.app/"
      },
      {
        name: "P013",
        url: "https://p013-c3262.web.app/"
      }
  ];

  ngOnInit() {
    this.reload.reloadEvent.subscribe(
      
    );
  }

  constructor(private reload: ReloadFrameService) {
  }

  reloadFrame(event: any){
    this.reload.reloadFrame();
  }
}
