import { Storage } from '@ionic/storage-angular';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  mensagens = {
    email: [{ tipo: 'required', mensagem: 'O Campo email é Obrigatório' }],
    senha: [{ tipo: 'required', mensagem: 'O Campo senha é Obrigatório' }]
  };
  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private route: Router
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
        ]),
      ],
    });
  }

  ngOnInit() {}
}
