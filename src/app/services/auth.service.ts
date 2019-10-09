import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public readonly authUrl = `${environment.apiUrl}/api-token-auth`;

  userToken = 'c25038e8a8a2ab28451f897b0d334048bdedcbad';

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
