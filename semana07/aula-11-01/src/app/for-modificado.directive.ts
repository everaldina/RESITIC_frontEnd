import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appForModificado]'
})
export class ForModificadoDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appForModificado(numero: number) {
    for (let i = 0; i < numero; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
