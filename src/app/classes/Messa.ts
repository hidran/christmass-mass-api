import { MessaInterface } from './../interfaces/messa';

export class Messa implements MessaInterface {
  id: number;
  demessa: string;
  postimax: number;
  postipren: number;

  constructor()  {

    this.id = 0;
    this.demessa = ' ';
    this.postimax = 0;
    this.postipren = 0;

  }

}
