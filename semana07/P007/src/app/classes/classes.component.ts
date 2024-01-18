import { Component, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  name: string = 'Categoria';
  @Input() categorias: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appForModificado(categories: string[]) {
    for (let i = 0; i < categories.length; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
