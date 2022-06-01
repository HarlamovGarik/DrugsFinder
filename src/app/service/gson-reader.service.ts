import {Injectable} from '@angular/core';
import data from "src/assets/data/data.json";


@Injectable({
  providedIn: 'root'
})

export class GsonReaderService {
  private readonly dataJson: any;

  constructor() {
    this.dataJson = data.drugs;
  }

  getData() {
    return this.dataJson;
  }
}

