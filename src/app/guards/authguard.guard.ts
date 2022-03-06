import { LoginService } from './../services/login.service';
import { LoginModel } from './../model/login.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  usuario!: LoginModel | null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usuario != null; //cambiar esto para saber si estoy logado
    //si el usuario es distinto de null, se pondrá en true por lo que la ruta se podrá activar y dará paso; si el usuario es null, nos dirá que es false y no nos dejará hacer nada 
  }
  
  constructor(private loginService: LoginService) {
    this.loginService.login.subscribe(usuario => {
      this.usuario = usuario;
    });
  }
}
