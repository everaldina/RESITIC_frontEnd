import { Component } from '@angular/core';
import { FileService } from '../../file.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  titulo: string = 'Categoria';
  categories: string[] = [];
  objeto: any;

  constructor(private fileService: FileService) {
    this.fileService.getJsonDataSubject().subscribe((data: any) => {
      this.objeto = data;
      this.categories = this.objeto.listaClasses;
    });
  }

  selecionarCategoria(categoria: string): void {
    this.fileService.selecionarClasses(
      this.objeto, categoria, 
    );
  }
}
