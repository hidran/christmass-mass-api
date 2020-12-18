import { Component, OnInit } from '@angular/core';
import { FedeleService} from './../../services/fedele.service';
import { MessaService} from './../../services/messa.service';   // ./../../services/fedele.service
import { Fedele} from '../../classes/Fedele';
import {ActivatedRoute, Router} from '@angular/router';
import { Messa} from '../../classes/Messa';
import { faUndo, faSave, faHandPointLeft, faTrashAlt, faInfoCircle, faThumbsUp, faThumbsDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fedele-detail',
  templateUrl: './fedele-detail.component.html',
  styleUrls: ['./fedele-detail.component.css']
})
export class FedeleDetailComponent implements OnInit {


  private fedelecopy;
  private __fedele;

  public messa: Messa;
  public fedele: Fedele;

 // definizione delle icone utilizzate
  faSave = faSave;
  faUndo = faUndo;
  faHandPointLeft = faHandPointLeft;
  faTrashAlt = faTrashAlt;
  faInfoCircle = faInfoCircle;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faCheckCircle = faCheckCircle;

  public message = '';
  public message1 = '';
  public textMessage1 = '';
  public textMessage2 = '';
  public textFedele = '';
  public headerPopup = '';
  public alertSuccess = false;
  public savechange = false;
  public isAdmin = false;
  public presenza = '';

  public funzione = '';
  public title = "Registrazione Messa";

  public messaSelezionata = '';
  public fase = '';
  public numberMessa: number;
  public isEntrato = false;
  constructor(private fedeleService: FedeleService,
              private messaService: MessaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.messa = new Messa();
    this.fedele = new Fedele();

    // recupero i dati della messa e preparo per la registrazione nuovo fedele
    // leggere tutti gli utenti registrati


   const values = localStorage.getItem("utente");         // JSON.parse(localStorage.getItem("utente"));
 //   alert('Messe -  .....................................................  onInit - ' + values);
    if(values == 'admin') {
      this.isAdmin = true;
    }
    this.messaSelezionata = localStorage.getItem("messa"); 

// verifico se nuova registrazione o dettaglio utente presente

// recupero il numero inserito nell'url  --  funziona
this.route.paramMap.subscribe(p => {
       this.numberMessa = +p.get('id');
    alert('fedele-detail OnInit ------  n.ro passato' + this.numberMessa);
});

this.fase = localStorage.getItem('gestioneutente');

         switch (this.fase) {
              case 'new':
                this.fedele.idmessa  = this.numberMessa;
                this.presenza = "Non Entrato";
                this.funzione = "Inserimento Fedele"
                             //   this.button.rilasna.visible = false
                break;
               
             //   this.button.elimi
              case 'show':
                this.funzione = "Modifica Fedele"
                this.route.paramMap.subscribe(p => {
                      this.loadDataFedele(+p.get('id'));
                       });
                break;
           }   







/*     originale    -- inserito in switch
     this.route.paramMap.subscribe(p => {
       this.loadDataFedele(+p.get('id'));
  });

*/

 



// test da togliere
 // this.messa.demessa = "test - medssa di natale del 24/12 - ore 15 ";
 // this.fedele.idMessa = 69;  // test
  }


// recupero i dati della messa
async loadDataFedele(id: number) {
 // alert('fedele-detail  loadDataFedele: ' + id);

  await this.fedeleService. getFedeli(id).subscribe(
       response => {
          this.fedele = response['data'];
          switch (this.fedele.presente) {
              case 'N':
                this.presenza = "Non Entrato";
                this.isEntrato = false;
                break;
              case 'S':
                this.presenza = "Entrato";
                this.isEntrato = true;
                break;
              default:
                this.presenza = "?";
                break;
           }   
/*
    if(fedele.presente == 'N') {
              this.presenza = "Non Entrato";
          } else {
              this.presenza = "Entrato";
          }
*/

      },
      error => {
         alert('Fedele-Data  -- loadDataFedele: ' + error.message);
         console.log(error);
      }
    )

  }

 
saveFedele() {
 
// alert('fedele-detail: lo stato è  ' + this.presenza);

  if(this.presenza == "Entrato"){
    alert('Fedele già entrato,\n modifica non possibile');
    return
  }

    if (this.fedele.id > 0) {
        this.updateFedele(this.fedele);
    } else {
        this.createFedele(this.fedele);
        this.aggionaPresenzeMessa(this.fedele);
    }
    

     // this.savechange = true;
     // this.alertSuccess = true;
  }

   async updateFedele(fedele: Fedele)  {
   await this.fedeleService.updateFedele(this.fedele).subscribe(
      response => {
          if(response['success']) {
            this.message = 'Fedele :' + fedele.cognome + ' ' + fedele.nome;
            this.message1 = "Modificato con successo"; 
            this.savechange = true;
            this.alertSuccess = true;
            this.fedele.cognome = "";
           //  alert(this.message);
          //   this.router.navigate(['users']);
          } else {
            alert(response['message']);
            this.alertSuccess = false;
          }
      },
      error =>
      {
        console.log(error);
        this.alertSuccess = false;
      }
    );
  }

 async   createFedele(fedele: Fedele)  {
   await this.fedeleService.createFedele(this.fedele).subscribe(
      response => {
          if(response['success']) {
            this.message = 'Fedele :' + fedele.cognome + ' ' + fedele.nome;
            this.message1 = "Inserito con successo"; 
              this.savechange = true;
              this.alertSuccess = true;
              this.fedele.cognome = "";
        //    il messaggio viene visualizzato sul dettaglio e il ritorno a elenco lo faccio a mano

        //    alert('Utente ' + user.name + ' Inserito   con successo');
       //     this.router.navigate(['users']);
          } else {
            alert(response['message']);
             this.alertSuccess = false;
           }
      },
      error =>
      {
        console.log(error);
        this.alertSuccess = false;
      }
    );
  }

   
  

async  rilasciaFedele(fedele: Fedele)  {
    await  this.fedeleService.updateFedele(this.fedele).subscribe(
      response => {
          if(response['success']) {
             this.message = 'Fedele: ' + fedele.cognome + ' ' + fedele.nome + ' Entrato !!';
              this.savechange = true;
              this.alertSuccess = true;
     
          } else {
            alert(response['message']);
            this.alertSuccess = false;
          }
      },
      error =>
      {
        console.log(error);
        this.alertSuccess = false;
      }
    );
  }
 
  // aggiorno le presenze in messa 
async aggionaPresenzeMessa(fedele: Fedele)  {
  
  //alert('fedele-detail (1) aggionaPresenzeMessa: ' + fedele.idmessa);
  await this.loadDataMessa(fedele.idmessa);
            this.aggiornaMessa(this.messa);
  }

  // leggo la messa

  async loadDataMessa(id: number)  {
 
    await this.messaService.getMessa(id).subscribe(
         response => {
            this.messa = response['data'];

        //    alert('fedele-detail  loadDataMessa:  (2) -- dopo lettura ID:' + this.messa.id);
  
        },
        error => {
           alert('Fedele-Data  -- loadDataFedele: ' + error.message);
           console.log(error);
        }
      )
  
  
   }
  

  // aggiorno i dati delle prenotazioni della messa
  async aggiornaMessa(messa: Messa){

    this.messa.postipren =  this.messa.postipren + 1;

   // alert('aggornaMessa-  ' + messa.id + ' pre:  ' + messa.postipren);
    await  this.messaService.updateMessa(messa).subscribe(
        response => {
           // non faccio nulla
        },
        error => {
           alert('Messa-Data  -- error--  --loadDataMessaaggiornaMessa: ' + error.message);
           console.log(error);
        }
      )
   }



 
 resetForm(form) {

    if (this.fedele.id  === 0) {
      this.fedele = new Fedele();
    } else {
      this.fedele = this.fedelecopy;
    }

  }

  backToMessa(){

   // var values = JSON.parse(localStorage.getItem("messa"));
    //  this.router.navigate(['messe', values]);
   this.router.navigate(['messa']);

  }


confirmdeleteFedele(fedele: Fedele) {
  //  document.getElementById('modelDlt').close;

  // window.close();
  this.headerPopup = 'Conferma Cancellazione';
  this.textMessage1 = 'Sei sicuro di voler cancellare ';
  this.textFedele = this.fedele.cognome + ' ' + this.fedele.nome;
  this.textMessage2 = '';


 }

confirmdPresenzaFedele(fedele: Fedele) {

// controllo se utente abilitato
const utente = localStorage.getItem("utente");         // JSON.parse(localStorage.getItem("utente"));
 //   alert('Messe -  .....................................................  onInit - ' + values);
    if(utente == 'fedele') {
      alert('funzione non consentita per fedele,\n avvisare responsabile');
      return
    }
     this.fedele.presente = "S";
     this.rilasciaFedele(this.fedele);
  
}
   

}