import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthxxService } from './../../services/authxx.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {


  private userFedele = "fedele";

  constructor(private authxx: AuthxxService, private router: Router) { }

  ngOnInit(): void {
  }

startRegistrazione() {

  alert('inizio registrazione');
// forzo il login per utenti fedeli che non effettuano login
    const values = localStorage.getItem('utente');         // JSON.parse(localStorage.getItem("utente"));
    alert('jumbotron -  .. startRegistrazione ...................................................  onInit - ' + values);
    if (localStorage.getItem('utente') === null) {
         this.authxx.loginxx(this.userFedele);
         alert('effettuata registrazione utente in localStorage');
      }
    this.router.navigate(['messa']);

}

startInfo() {
  alert('inizio helpe');
  this.router.navigate(['info']);


}


}
