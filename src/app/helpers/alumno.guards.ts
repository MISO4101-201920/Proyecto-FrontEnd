import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AlumnoGuards implements CanActivate {
    constructor(
        private router: Router
    ) { }

    cookieValue: string;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var currentUser = JSON.parse(sessionStorage.getItem('userConectaTe'));
      if (currentUser != null) {
            console.log("Entra Authguard")
            // check if route is restricted by role
            console.log("Entra: " + currentUser.isAlumno)
        if ( currentUser.isAlumno != true ) {
          this.router.navigate(['/']);
                return false;
        }else{
          return true;
        }
      }
    }
}
