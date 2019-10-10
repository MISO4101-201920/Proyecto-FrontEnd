import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Persona } from '../../models/persona.model';
import { AlumnoLogin } from '../../models/alumnoLogin.model';
import { ProfesorLogin } from '../../models/profesorLogin.model';
import { Login } from '../../models/login.model';
import { Observable, throwError } from 'rxjs';
// import 'rxjs/add/operator/catch';
import { retry, catchError } from 'rxjs/operators';

// interface Userlogin {
//   username: string;
//   password: string;
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public userToken: string;
  authUrl = `${URL_SERVICIOS}/users/api-token-auth/`;

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };




  // userLog: Userlogin = {
  //   username: '',
  //   password: ''
  // };

  constructor(private router: Router, public http: HttpClient) {
    console.log('se llamo el servicio');
  }

  // login(usuario: Persona, recordar: boolean = false): Observable<any> {
  login(usuario: Login): Observable<any> {
    // this.userLog.username = usuario;
    // this.userLog.password = password;

    if (false) {
      // localStorage.setItem('email', usuario.username);
    } else {
      localStorage.removeItem('email');
    }
    console.log(JSON.stringify(usuario));
    return this.http.post(this.authUrl, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(err => {
          // swal.fire('Error en el login', err.error.mensaje, 'error');
          console.log('Error en el login', err.error.mensaje, 'error');
          return Observable.throw(err);
        }
        )
      );
  }

  canActivate(): boolean {
    // Cuando se implemente login validar aquí el token para que se hagala redirección correctamente
    // const signedIn = !!this.userToken;
    const signedIn = true;
    if (!signedIn) {
      this.router.navigateByUrl('/login');
    }
    return signedIn;
  }
}
