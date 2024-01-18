import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  nome: string = 'Everaldina';
  idade: string = '22';
  curso: string = 'Ciencia da computacao';
  constructor() { }
}
