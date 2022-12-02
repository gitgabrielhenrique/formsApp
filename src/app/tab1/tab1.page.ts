import { Produto } from './../models/produto';
import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaUsuarios: Usuario[] = [];
  listaProdutos: Produto[] = [];
  constructor(private storageService: StorageService) { }

  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

ionViewDidEnter() {
  this.buscarUsuarios();
}

 async excluirCadastro(email: string) {
  await this.storageService.remove(email);
  this.buscarUsuarios();
}
async buscarProduto(){
  this.listaProdutos = await this.storageService.getAll();
}

ionViewDidEnter1() {
this.buscarProduto();
}

async excluirProduto(nome: string) {
await this.storageService.remove(nome);
this.buscarProduto();
}
}
