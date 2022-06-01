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
    private SubscribeService: SubscribeService) {
  }
  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
