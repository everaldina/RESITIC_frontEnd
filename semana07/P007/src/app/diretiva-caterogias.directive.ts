import { Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Directive({
  selector: '[appDiretivaCaterogias]'
})
export class DiretivaCaterogiasDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private viewContainer: ViewContainerRef) { }

  @Input() set appDiretivaCaterogias(categorias: string[]) {
    this.renderizadorCategorias(categorias);
  }

  private renderizadorCategorias(categorias: string[]) {
    categorias.forEach(categoria => {
      const component = this.viewContainer.createComponent(ButtonComponent);
  
      component.instance.text = categoria;
      this.renderer.appendChild(this.elementRef.nativeElement, component.location.nativeElement);

    });
  }

}
