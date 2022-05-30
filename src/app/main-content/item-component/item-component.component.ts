import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {
  @Input() card: any;
  @ViewChild("rating") rating: ElementRef | undefined;
  public ratingLists: String[] = []

  public AddToFavorite(card: object, fav: boolean) {
    this.CardService.setcart(card)
    this.card.favorite = fav
  }

  public OpenPopup() {
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
    private CardService: CardService
  ) {

  }
  Click_Item(){
    this.card.IsClicked++
  }
  ngOnInit(): void {
    if (this.card['old-price']) {
      this.discount_price = ((1 - this.card['price'] / this.card['old-price']) * 100).toFixed(1).concat(" %");
    }
    for (let container = 0; container < 5; container++) {
      let classList = "fa-solid fa-star star"
      if (container < this.card.rating) {
        classList += " select-star"
      }
      this.ratingLists.push(classList)
    }
  }

}
