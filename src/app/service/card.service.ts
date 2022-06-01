import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cart: Object[] = []

  getcart() {
    return this.cart
  }

  setcart(object: object) {
    this.cart.push(object);
  }

  constructor() {
  }
}
