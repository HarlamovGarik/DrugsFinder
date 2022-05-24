import {Component, OnInit} from '@angular/core';
import {HeaderMenuComponent} from "../../header/header-menu/header-menu.component";
import {ActivatedRoute} from "@angular/router";
import {SubscribeService} from 'src/app/service/subscribe.service'


@Component({
  selector: 'app-grid-items',
  templateUrl: './grid-items.component.html',
  styleUrls: ['./grid-items.component.scss']
})
export class GridItemsComponent implements OnInit {
  public selectCatalog: Object[] = []
  public sortingBy: string = ""

  public manufacturer: string[] = [];
  public type_form: string[] = [];

  get_manufacturer(){
    console.log(this.selectCatalog)
    this.selectCatalog.forEach(el =>{
      // @ts-ignore
      if(el.manufacturer){
        // @ts-ignore
        this.manufacturer.push(el.manufacturer)
      }

    })
    console.log(this.manufacturer)
  }
  get_type_form(){
    console.log(this.selectCatalog)
    this.selectCatalog.forEach(el =>{
      // @ts-ignore
      if(el.short_title){
        // @ts-ignore
        this.type_form.push(el.short_title)
      }

    })
    console.log(this.type_form)
  }
  constructor
  (
    private route: ActivatedRoute,
    private SubscribeService: SubscribeService

  )
  {
    console.log(this.selectCatalog)
    this.get_manufacturer()
    this.get_type_form()
  }
  tests(object:any){
    this.selectCatalog = HeaderMenuComponent.getCatalogBy_key(object)

  }
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    HeaderMenuComponent.getCatalogBy_key("allergy-medication")
    this.SubscribeService.subscribe$.subscribe((count) => this.tests(count))

  }


}
