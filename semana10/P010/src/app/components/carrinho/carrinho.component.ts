import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  carrinho: any[] = [];
  

  addItem(item: any) {
    this.carrinho.push(item);
  }
}
