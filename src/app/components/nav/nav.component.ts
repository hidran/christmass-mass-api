import { Component, OnInit } from '@angular/core';
import { AuthxxService } from '../../services/authxx.service';
import { User } from '../../classes/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isUserLoggedIn = false;
  public username: string;

  private isUserLogged = false;
  titolo = "Registrazione Messe di Natale";
  anno = "2020";

  constructor(private authxx: AuthxxService, private router: Router) {

    authxx.usersignedin.subscribe(
      (user: User)  => {
          this.username = user.name;
          this.isUserLoggedIn = true;
          alert('Nav - Costruttore - ' + this.username);
      }
  );

  /*

    this.isUserLogged = !!localStorage.getItem('utente');
    if(this.isUserLogged) {
      const values = JSON.parse(localStorage.getItem("utente"));
      alert('Nav - Costruttore - ' + values);
    }
    */
  }

  ngOnInit(): void {

    this.isUserLogged = true;
      const values = localStorage.getItem('utente');         // JSON.parse(localStorage.getItem("utente"));
    alert('Nav-onInit ...................................................  onInit - ' + values);
    if (localStorage.getItem('utente') === null) {
        this.isUserLogged = false;
    }

    alert('nav-OnInit   finito  ....................................................  onInit - ' + this.isUserLogged);
  }

goMesse()  {

 if (!this.isUserLogged) {
     alert('effettuare il login ,\n gestione non possibile');
     // return;
   } else {
    this.router.navigate(['messa']);
   }


}

startMesse() {

    const utente = localStorage.getItem('utente');         // JSON.parse(localStorage.getItem("utente"));
    alert('Nav -  ..startMesset ...................................................  onInit - ' + utente);
    if (localStorage.getItem('utente') === null) {
      localStorage.setItem('utente', 'fedele');
      }
    this.router.navigate(['messa']);

}





}



