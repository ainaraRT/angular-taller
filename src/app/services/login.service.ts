import { LoginModel } from './../model/login.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //BehaviorSubject, es observable y observador
  private loginModelBehaviourSubject: BehaviorSubject<LoginModel | null>
  public login: Observable<LoginModel | null> // ¿hay alguien logado o no?

  constructor(private http: HttpClient) {
    this.loginModelBehaviourSubject = new BehaviorSubject<LoginModel | null>(null); // TODO
    this.login = this.loginModelBehaviourSubject.asObservable();
  }

  performLogin(entrada: LoginModel): Observable<LoginModel> {
    //devolver el observable desde una api
    return this
        .http
        .post<LoginModel>(environment.loginUrl, entrada)
        .pipe(map(retornoAPI => {
          // Hacer algo
          console.log("Login OK: " + JSON.stringify(retornoAPI));
          this.loginModelBehaviourSubject.next(retornoAPI);
          localStorage.setItem("login", JSON.stringify(retornoAPI));
          return retornoAPI;
        }));
  }
}
