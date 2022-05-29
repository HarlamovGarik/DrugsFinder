import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubscribeService} from 'src/app/service/subscribe.service'


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private SubscribeService: SubscribeService

  ) {

  }
  tests(object:any){
    // console.log(object)
    // console.log(this.ObserverService.favorites$)
    // console.log(this.ObserverService.favorite)
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
