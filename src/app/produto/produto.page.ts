import { Storage } from '@ionic/storage-angular';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  formProduto: FormGroup;
  usuario: Usuario = new Usuario();
  mensagens = {
    nome: [
      {tipo:'required', mensagem:'O Campo é Obrigatório'},
      {tipo:'minlength', mensagem: 'O campo precisa ter pelo menos 3 caracteres!'}
    ],
    descricao:[  {tipo:'required', mensagem:'O Campo é Obrigatório'}],
    validade:[  {tipo:'required', mensagem:'O Campo é Obrigatório'}],
    preco:[ {tipo:'required', mensagem:'O Campo é Obrigatório'}],


  };
  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router)
  { this.formProduto = this.formBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        descricao: ['', Validators.compose([Validators.required])],
        validade: ['', Validators.compose([Validators.required])],
        preco: ['', Validators.compose([Validators.required])],

      });
    }

  ngOnInit() {
  }
  async salvarProduto() {
    if(this.formProduto.valid){
      this.usuario.nome = this.formProduto.value.nome;
      this.usuario.cpf = this.formProduto.value.cpf;
      this.usuario.email = this.formProduto.value.email;
      this.usuario.senha = this.formProduto.value.senha;
      await this.storageService.set(this.usuario.email, this.usuario);
      this.route.navigateByUrl('tabs/tab1');
    } else {
      alert('Formulário Inválido!');
    }
  }
}
