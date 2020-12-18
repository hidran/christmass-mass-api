import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faEyeSlash,  faEye } from '@fortawesome/free-solid-svg-icons';
import { Fedele } from '../../classes/Fedele';
import { User } from '../../classes/User';
import { AuthxxService } from './../../services/authxx.service';


interface Jwt {
   // parametri aggiuntivi - vedi AuthController in laraapi
      demessa: string;
      ruolo: string;
   }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelope = faEnvelope;
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  public fedele: Fedele;

  fieldTextType: boolean;

  password: string = '';
  toggle1: boolean = false;
  toggle2: boolean = false;
  // campi per gestione messaggio utente
  public alertSuccess = false;
  public savechange = false;
  public message = '';

  private userAdmin = "admin";
  private userFedele = "fedele";
  private userCorrect: boolean;


  private user = new User();
 // emettiamo degli eventi (la auth.service) che potranno essere ascoltati su altri componenti
 @Output() usersignedin = new EventEmitter<User>();

  constructor(private router: Router, private authxx: AuthxxService) {

   }

  ngOnInit() {
    this.fedele = new Fedele();
    this.fedele.cognome = "fedele";
    this.router.navigate(['login']);
    }

  // vertsione in cui sposto il subscribe nel componente e non nel service
  // prima versione   --- funziona
  /*
  signIn(form: NgForm) {
       if(!form.valid) {
        return false;
      }
       this.auth.signIn(form.value.email, form.value.password)
            .subscribe(
              (_payload: Jwt) => {
                 alert('login eseguito con successo');
                this.router.navigate(['/']);
              },
              ({error}) =>{
                alert(error.error);
                console.log(error)
              }
            );
    }  */

    signIn(form: NgForm) {
      if(!form.valid) {
       return false;
     }
     this.userCorrect = false;
      if(form.value.cognome == this.userAdmin) {
        this.userCorrect = true;
      }
      if(form.value.cognome == this.userFedele) {
        this.userCorrect = true;
      }
      if(!this.userCorrect) {
        alert('login ----- risposta Sbagliata: '  + form.value.cognome);
        this.alertSuccess = false;
        this.savechange = true;
        return false;
      }

      this.alertSuccess = true;
      this.savechange = true;
       alert('login-   utente passato:  ' + form.value.cognome);
       this.authxx.loginxx(form.value.cognome);
     this.router.navigate(['jumbo']);

    }

 // vertsione in cui sposto il subscribe nel componente e non nel service
  // seconda versione - Utilizzo di async-awai  (più performante con meno codice)

  /*
  async signIn(form: NgForm) {
    if(!form.valid) {
     return false;
   }
    try {

    // const resp = await this.auth.signIn(form.value.email, form.value.password).toPromise();
    //  alert('login corretto per utente:  ' + resp.user_name);
    //  this.router.navigate(['/']);
      const resp = await this.auth.signIn(form.value.email, form.value.password);
      if(resp){
        alert('login corretto per utente:  ' + resp.user_name);
        this.message = 'login corretto per utente:  ' + resp.user_name;
        this.savechange = true;
        this.alertSuccess = true;
      }
        // provvisoriamente non faccio visualizzazione immediata elenco
        this.router.navigate(['/']);
   } catch (e) {
        this.alertSuccess = false;
        this.savechange = true;
        console.log(e);
    //  alert('chgpwd - errore getUserLong da auth ----->  ' + e);
        switch (e.status)  {
          case 401:
           // alert(e.error.error);
            this.message = 'errore 401 - utente non riconosciuto';
            break;
          case 402:
           // alert(e.statusText);
           this.message = 'errore 402 ';
           break;
           case 403:
            // alert(e.statusText);
            this.message = 'errore 403 ';
            break;
            case 404:
            //alert(e.header.message);
            this.message = 'errore 404 - Non trovato';
            break;
            case 500:
            //alert('errore 500 - contattare il server');
            this.message = 'errore 500 - contattare il server';
            break;
            default:
              this.message = 'errore ' + e.status + ' ' + e.error.error;
              break;
       }

   }
  }

*/

}

