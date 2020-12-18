import { Component, OnInit } from '@angular/core';
import { MessaService} from './../../services/messa.service';
import { Messa} from '../../classes/Messa';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-messe',
  templateUrl: './messe.component.html',
  styleUrls: ['./messe.component.css']
})
export class MesseComponent implements OnInit {

  public alertSuccess = false;
  public isVisible = false;
  public Message = '';
  public title = 'Elenco Messe';
  public messe: Messa[] = [];

  // valido prima di modidiche per spostare edit e delete da userdata (dettaglio)
 //   @Output('updateUser') updateUser = new EventEmitter<User>();

  public isCollapsed = false;  // per gestire il collapse con un button
  public routerlnk = "messa";

  faPlusSquare = faPlusSquare;
  // dati di test. sostituirli poi con i valiri oggetto messa
  testmessa = 1;
  testDemessa = "messsa di Natale - ore 18.30 - giovedì 24/12/2020";
  public isAdmin = false;

  constructor(private messaService: MessaService, private route: Router) { }





  async ngOnInit() {

        this.isVisible = false;
    // se utente fedele inibisco la visibilità del bottone di nuova messa
    const values = localStorage.getItem('utente');         // JSON.parse(localStorage.getItem("utente"));
    //alert('Messe -  .....................................................  onInit - ' + values);

   /*
    if (localStorage.getItem('utente') === null) {
      alert('effettuare il login ,\n gestione non possibile');
      return;
    } */

    this.isAdmin = false;
    if(values == 'admin') {
      this.isAdmin = true;
    }

    alert('Messe-OnInit       --------------- vado a leggere le messe');


    //this.messe = this.messaService.getMesses().subscribe();

    /*
    this.messaService.getMesses().subscribe((res: Messa[]) => {

      alert('finito di leggere le messe -- ' + res);
      this.messe = res;
    });
*/

  await  this.messaService.getMesses().subscribe(
      response => {
      if(response['Success']) {
        this.alertSuccess = true;
        this.isVisible = true;
        this.Message = 'Situazione attuale';
        this.messe = response['data'];
          }
      },
      error => {
        this.alertSuccess = false;
        this.isVisible = true;
        console.log(error);
        switch (error.status) {
          case 401:      //login
              this.Message = 'errore 401';
              break;
          case 403:     //forbidden
              this.Message = 'errore 403';
              break;
          case 404:      //login
              this.Message = 'errore 404';
              break;
          case 405:     //forbidden
              this.Message = 'errore 405';
              break;
          default:
              this.Message = error.status;
              break;
          }
          alert('errore trovato:' + error.status);
      });


alert('Messe ---- finita la creazione elenco messe');


    }
/*
    this.messaService.getMesses().subscribe(
      res => {
       this.messe = res['data'];

      },
      error => {
       console.log(error);
      }
    );
  */

/*       -----------------------   test   da eliminare
  // provvisoria  per test
  selezionaMessa() {

  //  alert('Messa-Data  ----  selezionato la messa e salvata  su localstorage: ' + this.testDemessa);
    localStorage.setItem("messa", this.testDemessa);
    this.route.navigate(['messa', this.testmessa]);


  }
*/


}
