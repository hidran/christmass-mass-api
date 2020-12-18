import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FedeleService} from './../../services/fedele.service';
import { MessaService }  from './../../services/messa.service'; // ./../../services/fedele.service
import { Fedele} from '../../classes/Fedele';
import {ActivatedRoute, Router} from '@angular/router';
import { Messa} from '../../classes/Messa';

@Component({
  selector: 'app-messa-data',
  templateUrl: './messa-data.component.html',
  styleUrls: ['./messa-data.component.css']
})
export class MessaDataComponent implements OnInit {

  public demessa: string;
  public poMax = 0;
  public poPre = 0;
  public title = "elenco fedeli registrati";
  faPlusSquare = faPlusSquare;
  public fedeli: Fedele[] = [];
  public messa: Messa;

  constructor(private fedeleService: FedeleService,
              private messaService: MessaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(p => {
      this.loadDataMessa(+p.get('id'));
      this.loadFedeliMessa(+p.get('id'));
      });



  }

 // recupero i dati della messa
 loadDataMessa(id: number) {
 // alert('mess-daat  loadDataMessa: ' + id);

    this.messaService.getMessa(id).subscribe(
      response => {
          this.messa = response['data'];
      },
      error => {
         alert('Messa-Data  --loadDataMessa: ' + error.message);
         console.log(error);
      }
    )

  }

 // recupero i dati della messa
 loadFedeliMessa(id: number) {
 // alert('mess-daat  loadFedeliMessa: ' + id);



  this.fedeleService.getAllFedeli().subscribe(
    // sentire hidran per lettura particolare
   // this.fedeleService.getFedeliforMessa(id).subscribe(
      response => {
          this.fedeli = response['data'];
      },
      error => {
         alert('Messa-Data  -- loadFedeliMessa: ' + error.message);
         console.log(error);
      }
    )

  }

  registraPresenza() {

   // alert('devo registrae la presenza del fedele');
    // passare il valore della messa selezionata
    localStorage.setItem("gestioneutente", 'new');
    this.router.navigate(['fedeleMessa', this.messa.id, 'new']);

 }


}


