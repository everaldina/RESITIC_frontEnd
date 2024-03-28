import { Component } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P010';
  jsonContent: any;

  constructor(private fileService: FileService) {
    
  }
  

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
        this.fileService.initSelecao(Object.keys(this.jsonContent));
        
      } catch (error) {
        console.error('Erro ao analisar o arquivo JSON:', error);
      }
    };

    reader.readAsText(file);
  }
}
