import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {GsonReaderService} from 'src/app/service/gson-reader.service'
import {SubscribeService} from 'src/app/service/subscribe.service'

import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  public catalogues: object[] = [];
  public popular_catalogues: string[] = [];
  static medicine: any;
  static selectedOption: string = "";
  public cards = this.CardService.getcart()
  public sum: number = 0;
  public StyleHelper: {
    catalog_list: boolean,
    popup_list: boolean,
    popup_list_empty: boolean
    sidebar: boolean,
  } = {
    catalog_list: false,
    popup_list: false,
    popup_list_empty: true,
    sidebar: false,
  };

  @ViewChild('overlay') overlay: ElementRef | undefined;

  static getCatalogBy_key(key: string) {
    return HeaderMenuComponent.medicine[key]
  }

  OpenCATALOG_lIST() {
    this.StyleHelper.catalog_list = !this.StyleHelper.catalog_list;
    this.StyleHelper.sidebar = false
  }

  OpenSIDEBAR() {
    this.StyleHelper.sidebar = !this.StyleHelper.sidebar;
    this.StyleHelper.catalog_list = false
  }

  OpenPOPUP_LIST() {
    this.StyleHelper.popup_list = !this.StyleHelper.popup_list;
    console.log(this.StyleHelper.popup_list)
  }

  deleteCard(card: object) {
    // @ts-ignore
    card.favorite = false
    const index = this.cards.map(find0bg => {
      // @ts-ignore
      return find0bg.id;
    })
      // @ts-ignore
      .indexOf(card.id);
    console.log(index)
    this.cards.splice(index, 1);
  }

  Get_Sum() {
    this.sum = 0
    if (this.cards.length > 0) {
      this.cards.forEach((el: object) => {
        // @ts-ignore
        if (el['discount'] > 0) {
          // @ts-ignore
          this.sum += el['discount']
        } else {
          // @ts-ignore
          this.sum += el['price']
        }
      })
      return Math.round(this.sum)
    } else return 0
  }

  add_toPopular(key: string) {
    if (!this.popular_catalogues.includes(key))
      if (this.popular_catalogues.length < 5)
        this.popular_catalogues.push(key);
      else {
        this.popular_catalogues.pop()
        this.popular_catalogues.unshift(this.replace_(key))
      }
  }

  OpenOverlay(): string {
    if (this.StyleHelper.popup_list || this.StyleHelper.sidebar) {
      return 'block'
    } else
      return 'none'
  }

  // @HostListener('overlay:click', ['$event'])
  // onMouseClick(event: MouseEvent) {
  //   // @ts-ignore
  //   if (event.target !== this.overlay && (
  //     this.StyleHelper.catalog_list ||
  //     this.StyleHelper.sidebar ||
  //     this.StyleHelper.popup_list
  //   )) {
  //     this.StyleHelper.catalog_list = false;
  //     this.StyleHelper.sidebar = false;
  //     this.StyleHelper.popup_list = false;
  //   }
  // }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape' && (this.StyleHelper.catalog_list || this.StyleHelper.sidebar || this.StyleHelper.popup_list)) {
      this.StyleHelper.catalog_list = false;
      this.StyleHelper.sidebar = false;
      this.StyleHelper.popup_list = false;
    }
  }

  replace_(el_key: string) {
    return el_key.replace('-', ' ').replace('-', ' ')
  }

  constructor(
    private gsonReaderService: GsonReaderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private SubscribeService: SubscribeService,
    private CardService: CardService
  ) {
  }

  MoveToCatalog(name_catalog: string) {
    let path = "Catalog/".concat(name_catalog)
    this.SubscribeService.next(name_catalog);
    this.router.navigate([path], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: null
      },
      queryParamsHandling: 'merge',
    });
    this.StyleHelper.sidebar = false
    this.StyleHelper.catalog_list = false
    this.StyleHelper.popup_list = false
  }

  MoveAndADD(name_catalog: string) {
    this.MoveToCatalog(name_catalog)
    this.add_toPopular(name_catalog)
  }

  ngDoCheck() {
    this.cards = this.CardService.getcart()
    this.StyleHelper.popup_list_empty = this.cards.length === 0;
  }

  ngOnInit(): void {
    HeaderMenuComponent.medicine = this.gsonReaderService.getData();
    Object.keys(HeaderMenuComponent.medicine).forEach(el => {
      this.catalogues.push({
        'value': el,// @ts-ignore
        'text': this.replace_(el)
      })
    });
  }


}
