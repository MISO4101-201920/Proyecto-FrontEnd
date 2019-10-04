import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'cursos',
        loadChildren: './cursos/cursos.module#CursosModule',
        data: { preload: true }
      },
      {
        path: 'contenido-interactivo',
        loadChildren: './contenido-interactivo/contenido-interactivo.module#ContenidoInteractivoModule',
        data: { preload: true }
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cursos', component: NopagefoundComponent },
  { path: 'contenido', component: NopagefoundComponent },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
