import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P007';
  classes: string[] = [];
  jsonContent: any;
  name_obejct: string = 'objetos';
  name_prop: string = 'propriedades';

  // funcao para ler arquivo
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.readJsonFile(file);
    }
  }

  // lendo conteudo arquivo JSON
  readJsonFile(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      try {
        this.jsonContent = JSON.parse(e.target.result);
        this.classes = Object.keys(this.jsonContent);
        // this.classes = Object.keys(jsonContent).map(key => jsonContent[key]);
        
      } catch (error) {
        console.error('Erro ao analisar o arquivo JSON:', error);
      }
    };

    reader.readAsText(file);
  }

  // funcao para pegar objetos
  get_object(category: string): any[] {
    if (category in this.classes) {
      return this.jsonContent[category];
    }else{
      return [];
    }
  }

  // funcao para pegar propriedades
  get_prop(category: string, name: string): any[] {
    const obj_list = this.get_object(category); 

    if (obj_list.length > 0) {
     obj_list.find((obj: any) => {
        if (obj.Name === name) {
          return obj;
        }
     });
    }
    return [];
  }

  // funcao para pegar valor
  get_value(category: string, name: string, prop: string): any {
    const obj: object = this.get_prop(category, name);
    return '';
  }





}
