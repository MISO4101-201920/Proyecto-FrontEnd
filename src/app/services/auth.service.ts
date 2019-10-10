import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public readonly authUrl = `${environment.apiUrl}/api-token-auth`;

  userToken = '452c39042e5e9874be461bbab2437a34a249014b';

  constructor(private router: Router) { }

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
