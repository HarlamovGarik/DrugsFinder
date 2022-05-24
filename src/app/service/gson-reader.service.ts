import {Injectable} from '@angular/core';
import data from "../../assets/data/data.json";


@Injectable({
  providedIn: 'root'
})

export class GsonReaderService {
  private readonly dataJson: any;

  constructor() {
    console.log(data.drugs);
    this.dataJson = data.drugs;
  }

  getData() {
    return this.dataJson;
  }
}

