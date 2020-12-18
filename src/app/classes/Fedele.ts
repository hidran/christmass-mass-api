import { FedeleInterface } from './../interfaces/fedele';

export class Fedele implements FedeleInterface {
  id: number;
  idmessa: number;
  cognome: string;
  nome: string;
  email: string;
  telefono: string;
  presente: string;

  constructor()  {

    this.id = 0;
    this.idmessa = 0;
    this.cognome = ' ';
    this.nome = ' ';
    this.email = ' ';
    this.telefono = ' ';
    this.presente = 'N';

  }

}
