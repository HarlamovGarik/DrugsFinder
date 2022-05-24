import {Injectable} from '@angular/core';
import {HeaderMenuComponent} from "../header/header-menu/header-menu.component";

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

  openpopup() {
    // this.HeaderMenuComponent.OpenPOPUP_LIST();
  }

  constructor() {
  }
}
