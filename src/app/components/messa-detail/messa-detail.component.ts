import { Component, OnInit, Input } from '@angular/core';
import { MessaService} from './../../services/messa.service';
import { Messa} from '../../classes/Messa';
import { faUndo, faSave, faHandPointLeft, faTrashAlt, faInfoCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messa-detail',
  templateUrl: './messa-detail.component.html',
  styleUrls: ['./messa-detail.component.css']
})
export class MessaDetailComponent implements OnInit {

    private messacopy;
    private __messa;
    // definizione delle icone utilizzate
    faSave = faSave;
    faUndo = faUndo;
    faHandPointLeft = faHandPointLeft;
    faTrashAlt = faTrashAlt;
    faInfoCircle = faInfoCircle;
    faThumbsUp = faThumbsUp;
    faThumbsDown = faThumbsDown;

    //  get - set
    @Input() set messa(messa: Messa) {
      this.__messa = messa;
      this.messacopy = Object.assign({}, messa);
    }

    get messa() {
      return this.__messa;
    }

    public textMessage1 = '';
    public textMessage2 = '';
    public textUser = '';
    public headerPopup = '';
    public perDebug = 'utente passato: ';
    public message = '';

    public alertSuccess = false;
    public isVisible = false;

    constructor(private messaService: MessaService,
      private route: ActivatedRoute,
      private router: Router) {
}

ngOnInit() {
  this.messa = new Messa();

  this.route.paramMap.subscribe(ret => {
     if (!ret.get('id')) {
         return;
     }
 //    alert('messa-detail - letto utente passato ' + params.id);

     this.messaService.getMessa(+ret.get('id')).subscribe(
          response =>
          {
             this.messa = response['data'];
          },
          error =>
          {
            console.log(error);
          });
     });
}


  saveMessa() {

    this.isVisible = false;
    if (this.messa.id > 0) {
        this.updateMessa(this.messa);
    } else {
        this.createMessa(this.messa);
    }
      this.isVisible = true;
      this.alertSuccess = true;
  }

 async updateMessa(messa: Messa)  {
   await  this.messaService.updateMessa(this.messa).subscribe(
      response => {
          if(response['success']) {
             this.message = 'Messa ' + messa.demessa + ' Modificata con successo';
             this.isVisible = true;
             this.alertSuccess = true;
           //  alert(this.message);
          //   this.router.navigate(['users']);
          } else {
            alert(response['message']);
            this.alertSuccess = false;
            this.isVisible = true;
          }
      },
      error =>
      {
        console.log(error);
        this.isVisible = true;
        this.alertSuccess = false;
      }
    );
  }






 async   createMessa(messa: Messa)  {
   await  this.messaService.createMessa(this.messa).subscribe(
      response => {
          if(response['success']) {
            this.message = 'Messa ' + messa.demessa + ' Inserita   con successo';
            this.isVisible = true;
            this.alertSuccess = true;
        //    il messaggio viene visualizzato sul dettaglio e il ritorno a elenco lo faccio a mano

        //    alert('Utente ' + user.name + ' Inserito   con successo');
       //     this.router.navigate(['users']);
          } else {
            alert(response['message']);
             this.alertSuccess = false;
             this.isVisible = true;
           }
      },
      error =>
      {
        console.log(error);
        this.alertSuccess = false;
        this.isVisible = true;
      }
    );
  }



  resetForm(form) {

    if (this.messa.id === 0) {
      this.messa = new Messa();
    } else {
      this.messa = this.messacopy;
    }

  }

  backToUsers(){
    // this.router.navigate(['users']); // rimandavo a elenco utenti
     this.router.navigate(['messe']);
  }

}


