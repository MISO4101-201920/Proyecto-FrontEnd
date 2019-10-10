import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/usuario/auth.service'
import { Persona } from '../models/persona.model'
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame = false;
  auth2: any;

  usuario: Persona;
  constructor(
    public router: Router,
    public _authService: AuthService
  ) { }

  ngOnInit() {
  }
  // this.usuario
  pruebaLogin() {

    console.log('llamaron pruebaLogin');
    
    // this._authService.login("eduard", "2614eduard2614")
    //   .subscribe((respuesta) => console.log(respuesta));

  }
  // "username": "eduard",
  // "password": "2614eduard2614"

  //     "username": "profesoruno",
  // "password": "2614eduard"
}
