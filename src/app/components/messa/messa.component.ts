import { Component, Input, OnInit } from '@angular/core';
import { MessaService} from '../../services/messa.service';
import { Messa} from '../../classes/Messa';
import { faUserEdit, faTrash, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-messa]',
  templateUrl: './messa.component.html',
  styleUrls: ['./messa.component.css']
})
export class MessaComponent implements OnInit {


  @Input('messa-data') messa: Messa;

  faUserEdit = faUserEdit;
  faTrash = faTrash;
  faInfo = faInfo;
  faInfoCircle = faInfoCircle;

// -----
  public textMessage1 = '';
  public textMessage2 = '';
  public textUser = '';
  public headerPopup = '';
  public perDebug = 'utente passato: ';
  public message = '';
  public isAdmin = false;
  // ------

  constructor(private messaService: MessaService, private route: Router) {
  }

  ngOnInit() {

       //   per gestire eventuale popup
       this.headerPopup = 'Registrazione Messa';
       this.textMessage1 = 'Raggiunti tutti i posti disponibili ';
    //   this.textUser = this.messa.demessa;
       this.textMessage2 = 'Registrazione non possibile';
  }



  updateUser() {
    this.route.navigate(['messe', this.messa.id, 'edit']);


  }

  showMessaDetail() {

    if(this.messa.postimax == this.messa.postipren)  {


       //  alert('raggiunti tutti i posti disponibili,\n Registrazione non possibile');
        return;
      }  else {

        alert('Messa-Data  ----  selezionato la messa e salvata  su localstorage: ' + this.messa.id);
        localStorage.setItem("messa", this.messa.demessa);

        // verifico il tipo utente. se fedele vado a inserimento
         const values = localStorage.getItem('utente');         // JSON.parse(localStorage.getItem("utente"));
    //alert('Messe -  .....................................................  onInit - ' + values);
   
   /*
    if (localStorage.getItem('utente') === null) {
      alert('effettuare il login ,\n gestione non possibile');
      return;
    } */

      switch (values) {
              case 'admin':
                this.isAdmin = true;
                this.route.navigate(['messa', this.messa.id]);
                break;
              case 'fedele':
                this.isAdmin = false;
                localStorage.setItem("gestioneutente", 'new');
                this.route.navigate(['fedeleMessa', this.messa.id, 'new']);
                break;
    
           }   
        
      }



   // passare oggetto messa
   // this.route.navigate(['messa', this.messa.id]);


  }

  //   metodo per conferma popup
  okconfirm() {
    // alert('metodo da fare');
  }
}
