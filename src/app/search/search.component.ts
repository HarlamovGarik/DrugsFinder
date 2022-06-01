import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GsonReaderService} from "../service/gson-reader.service";
import {PipeService} from "../service/pipe.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public search_request: string | null = "";
  public medicine: Object[] = [];
  public find_items: Object[] = [];

  constructor(
    private readonly PipeService: PipeService,
    private route: ActivatedRoute,
    private gsonReaderService: GsonReaderService,
  ) {

  }
  find_by_request(search: string | null) {
    this.find_items = []
    if (search) {
      Object.keys(this.medicine).forEach(key => {
        if(search.length <= key.length)
        if (key.slice(0, search.length).toLowerCase() == search.toLowerCase()) {
          // @ts-ignore
          this.find_items = this.medicine[key]
        } else {
          // @ts-ignore
          this.medicine[key].forEach(item => {
            item['title'].split(" ").forEach((word:string) =>{
              if(word.length <= key.length)
              if(word.slice(0, search.length).toLowerCase() == search.toLowerCase()){
                this.find_items.push(item)
              }
            })
          })
        }
      })
    }
  }

  ngOnInit(): void {
    this.medicine = this.gsonReaderService.getData();
    this.find_by_request(this.search_request)
    this.PipeService.search$.subscribe((count) => this.log(count));
  }
  log(search_request: string)
  {
    this.search_request = search_request
    this.find_by_request(search_request)
  }
}
