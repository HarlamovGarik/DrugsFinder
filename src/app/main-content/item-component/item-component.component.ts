import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  @Input() card: any;

  public AddToFavorite(card: object, fav: boolean){
    console.log("Hello from Hell")
    this.CardService.setcart(card)
    this.card.favorite = fav
  }
  public OpenPopup(){
  }
  public selectCatalog: Object[] = [];
  public discount_price: string = "";


  get_Price() {
    if (this.card.discount) {
      return this.card.discount
    } else
      return this.card.price
  }

  constructor(
    private CardService:CardService
  ) {

  }

  ngOnInit(): void {
    if (this.card.discount) {
      let new_price: number = parseFloat(this.card.discount.replace(',', '.'));
      let price: number = parseFloat(this.card.price.replace(',', '.'));
      this.discount_price = Number(1 / (price / new_price) * 100).toFixed(1).concat(" %");
    }
  }

}
