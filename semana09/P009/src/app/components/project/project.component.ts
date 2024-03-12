import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ReloadFrameService } from '../../reload-frame.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  urlInput: string = '';
  urlSafe: any;
  reloadObservable: any;
  @ViewChild('iframe') iframe: any;

  constructor(private route: ActivatedRoute, private DomSanitizer: DomSanitizer, private reloadFrameService: ReloadFrameService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.urlInput = decodeURIComponent(params['url']);
      this.reload();
    });

    this.reloadFrameService.reloadEvent.subscribe(() => {
      this.reload();
    });
  }

  reload(){
    this.urlSafe = this.DomSanitizer.bypassSecurityTrustResourceUrl(this.urlInput);
  }
}
