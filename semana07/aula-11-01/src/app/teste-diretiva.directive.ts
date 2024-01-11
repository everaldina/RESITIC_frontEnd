import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTesteDiretiva]'
})
export class TesteDiretivaDirective {

  constructor(private elemento: ElementRef) { 

  }

  ngOnInit() {
    this.elemento.nativeElement.style.backgroundColor = 'yellow';
  }

}
