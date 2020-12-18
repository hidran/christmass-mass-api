import { Component, Input, OnInit } from '@angular/core';
import { FedeleService } from '../../services/fedele.service';
import { Fedele} from '../../classes/Fedele';
import { faUserEdit, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-fedele]',
  templateUrl: './fedele.component.html',
  styleUrls: ['./fedele.component.css']
})
export class FedeleComponent implements OnInit {

  @Input('fedele-data') fedele: Fedele;

  faUserEdit = faUserEdit;
  faTrash = faTrash;
  faInfo = faInfo;


  constructor(private fedeleService: FedeleService, private route: Router) { }

  ngOnInit(): void {
  }

showFedeleDetail() {

  // alert('fedele - da fare');

  localStorage.setItem("gestioneutente", 'show');
  this.route.navigate(['fedele', this.fedele.id,]);



  }
}
