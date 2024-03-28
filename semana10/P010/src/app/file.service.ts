import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private selecao = new Subject<any>();
  

  constructor() { }

  getJsonDataSubject() {
    return this.selecao.asObservable();
  }

  
  initSelecao(classes: string[]){
    this.selecao.next(
      {
        listaClasses: classes,
        classeSelecionada: '',
        listaObjetos: [],
        objetoSelecionado: '',
        listaPropriedades: [],
        propriedadeSelecionada: '',
      }
    );
  }



  selecionarClasses(objetoAnterior: any, classeSelecionada: string, objetos: any[]): void {
    this.selecao.next(
      {
        listaClasses: objetoAnterior.listaClasses,
        classeSelecionada: classeSelecionada,
        listaObjetos: objetos,
        objetoSelecionado: '',
        listaPropriedades: [],
        propriedadeSelecionada: '',
      }
    );
  }

  selecionarObjeto(objetoAnterior: any, objeto: string, propriedades: string[]){
    this.selecao.next(
      {
        listaClasses: objetoAnterior.listaClasses,
        classeSelecionada: objetoAnterior.classeSelecionada,
        listaObjetos: objetoAnterior.listaObjetos,
        objetoSelecionado: objeto,
        listaPropriedades: propriedades,
        propriedadeSelecionada: '',
      }
    );
  }

  selecionarPropriedade(objetoAnterior: any, propriedade: string){
    this.selecao.next(
      {
        listaClasses: objetoAnterior.listaClasses,
        classeSelecionada: objetoAnterior.classeSelecionada,
        listaObjetos: objetoAnterior.listaObjetos,
        objetoSelecionado: objetoAnterior.objetoSelecionado,
        listaPropriedades: objetoAnterior.listaPropriedades,
        propriedadeSelecionada: propriedade,
      }
    );
  }
}
