import { EventEmitter, Injectable, Output } from '@angular/core';
import {User} from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class AuthxxService {

  private isUserLogged = true;
  @Output() usersignedin = new EventEmitter<User>();

  constructor() { }

  isUserLoggedIn() {           // ---- ok
    // faccio la verifica se l'utente è loggato
    // con !! (doppia negazione) trasformiamo in booleano il risultato della verifica su localStorage
    this.isUserLogged = !!localStorage.getItem('utente');
    return this.isUserLogged;


  }


  loginxx(username: string) {   // ----- ok
    // metodo per la registrazione dell 'utente

          localStorage.setItem("utente", username);
          const user = new User();
          user.name = username;
          this.usersignedin.emit(user);
  }



}
