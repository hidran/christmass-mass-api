import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Messa } from './../classes/Messa';




@Injectable({
  providedIn: 'root'
})
export class MessaService {

// lettura dati da server laraapi
messes: Messa[] = [];  // definisco i dati come array vuoto

private prefixTable = "/messa";
// vecchia versione senza environment
//  private APIURL = 'http://localhost:8000/users';  // definisco l'url su cui effettuare la lettura sul server

private APIURL = environment.APIURL + this.prefixTable;  // definisco l'url su cui effettuare la lettura sul server


constructor(private http: HttpClient) {
}

// attenzione: per ogni funzione che voglio usare DEVO passare il token per dimostrare che sono loggato



/*     non serve
getAuthHeader(): HttpHeaders   {
  // passo il token dentro a header per non farlo passare in chiaro su url
  const headers = new HttpHeaders(
      {
          Authorization: 'Bearer ' +  this.auth.getToken()
      }
    );
    return headers;
  }
*/


getMesses() {

// ritorniamo un observoble - il subscribe devo farlo su users.component.ts

// la chiamata la faccio solo se ho il token per abilitare la lettura solo a uteti loggati

    // primo metodo passando il token in chiaro su url
    //  return this.http.get(this.APIURL + '?token=' + this.auth.getToken());       // <---- 1° metodo  in chiaro su url

    // secondo metodo passando il token non in chiaro come header                   // <---- 2* metodo come header (non in chiaro)
     return this.http.get(this.APIURL);      // ok


   /*
    return this.http.get(this.APIURL).subscribe(
      data => console.log(data),
      error => alert(error.message)
    );

*/

    }

    getMessa(id: number) {
      return this.http.get(this.APIURL + '/' + id);
    }


    deleteMessa(messa: Messa) {
      return this.http.delete(this.APIURL + '/' + messa.id);

    }



updateMessa(messa: Messa) {

  // imposto il metodo put pervhè laravel non gestisce e devo utilizzare il post per camuffare
  //
  //   return this.http.patch(this.APIURL + '/' + user.id,user);
  messa['_method'] = 'PUT';

  return this.http.patch(this.APIURL + '/' + messa.id, messa);

}


 createMessa(messa: Messa){
  return this.http.post(this.APIURL, messa);
}



}

