import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean { // sprawdzenie czy uzytkownik sie faktycznie zalogowal

    const token = localStorage.getItem('jwt');
    return !!token;
  }
}
