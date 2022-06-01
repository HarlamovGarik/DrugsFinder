import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HeaderMenuComponent} from "../../header/header-menu/header-menu.component";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {SubscribeService} from 'src/app/service/subscribe.service'

@Component({
  selector: 'app-grid-items',
  templateUrl: './grid-items.component.html',
  styleUrls: ['./grid-items.component.scss']
})
export class GridItemsComponent implements OnInit {
  public selectCatalog: Object[] = []
  public visibilityPage: Object[] = []
  public filteredData: Object[] = []
  public filter_list: Object[] = []
  public quantity: number = 0
  public filters: any[] = []

  public max: number = 0;
  public min: number = 0;

  public filtered: boolean = false;

  public maxElement: number = 15;
  public sortingBy: string = "";

  public key_link: string = "";
  public key_string: string = "";
  public previous: any;
  public select_item: string = ''
  public manufacturer: string[] = [];

  public page: {
    _length: number,
    _current: number,
    _max: number,
  } = {
    _length: 0,
    _current: 1,
    _max: 0
  }

  public filterForm = [
    {'text': 'by expensive to cheap', 'name': 'cheap', 'value': 'asc'},
    {'text': 'by cheap to expensive', 'name': 'cheap', 'value': 'desc'},
    {'text': 'by popular', 'name': 'popular', 'value': 'IsClicked'},
    {'text': 'by discount', 'name': 'discount', 'value': 'old-price'},
    {'text': 'by rating', 'name': 'rating', 'value': 'rating'}
  ]

  get_minMax(obj: Object) {
    // @ts-ignore
    return obj['price']
  }

  uniqueOption(list: Object[], nameItem: string): string[] {
    const result: string[] = [];
    list.forEach(el => {
      // @ts-ignore
      if (!result.includes(el[nameItem])) {
        // @ts-ignore
        result.push(el[nameItem]);
      }
    });
    return result
  }

  get_manufacturer() {
    this.manufacturer = this.uniqueOption(this.selectCatalog, 'manufacturer')
  }

  delete_filter(index: number) {
    const filter = this.filter_list[index]
    // @ts-ignore
    filter['value'] = filter['default']
    // @ts-ignore
    filter['filtered'] = false
    // @ts-ignore
    this.filters[index] = filter['default']
    this.init_filter()
  }

  init_filter() {
    // @ts-ignore
    this.FilterByKey(this.filter_list[0]['value'], this.filter_list[1]['value'], this.filter_list[2]['value'], this.filter_list[3]['value'], this.filter_list[4]['value'])
  }

  FilterByKey(from: number, to: number, manufacture: string, type_drugstore: string, favorite: boolean, discount: boolean, status: boolean) {
    // @ts-ignore
    console.log(type_drugstore, this.filter_list[3]["value"])
    this.filteredData = this.selectCatalog;
    this.filtered = false
    // @ts-ignore
    this.filter_list[5]['value'] = discount
    // @ts-ignore
    this.filter_list[5]['filtered'] = discount
    // @ts-ignore
    this.filter_list[4]['value'] = favorite
    // @ts-ignore
    this.filter_list[4]['filtered'] = favorite
    // @ts-ignore
    this.filter_list[6]['value'] = status
    // @ts-ignore
    this.filter_list[6]['filtered'] = status

    // @ts-ignore
    if (from != this.filter_list[0]['value'] || to != this.filter_list[1]['value']) {
      // @ts-ignore
      this.filter_list[0]['value'] = from
      // @ts-ignore
      this.filter_list[1]['value'] = to
      // @ts-ignore
      this.filter_list[0]['filtered'] = true
      // @ts-ignore
      this.filter_list[1]['filtered'] = true
    }
    // @ts-ignore
    if (manufacture != this.filter_list[2]['value']) {
      // @ts-ignore
      this.filter_list[2]['value'] = manufacture
      // @ts-ignore
      this.filter_list[2]['filtered'] = true
    }
    // @ts-ignore
    if (type_drugstore != this.filter_list[3]['value']) {
      // @ts-ignore
      this.filter_list[3]['value'] = type_drugstore
      // @ts-ignore
      this.filter_list[3]['filtered'] = true
    }
    this.filteredData = this.filteredData.filter(value => {
      // @ts-ignore
        return value['price'] >= from && value['price'] <= to
    })
    if(manufacture != "")
    this.filteredData = this.filteredData.filter(value => {
      // @ts-ignore
      return value['manufacturer'] == manufacture
    })
    if(type_drugstore != "")
    this.filteredData = this.filteredData.filter(value => {
      // @ts-ignore
      return value['source_alt'] == type_drugstore
    })
    if (favorite) {
      this.filteredData = this.filteredData.filter(value => {
        // @ts-ignore
        if (value['favorite']) return value['favorite']
      })
    }
    if (discount) {
      this.filteredData = this.filteredData.filter(value => {
        // @ts-ignore
        if (value['old-price'] > 0) return value['old-price']
      })
    } if (status) {
      this.filteredData = this.filteredData.filter(value => {
        // @ts-ignore
        if (value['status']) return value['status']
      })
    }
    this.filter_list.forEach(el => {
      // @ts-ignore
      if (el['filtered']) this.filtered = true
    })
    this.ShowItems()
    this.showPaginator()
  }
  SortingByKey(key: string) {
    console.log(key)
    if (key == 'asc') {
      // @ts-ignore
      this.selectCatalog = this.selectCatalog.sort((a, b) => a['price'] < b['price'] ? 1 : -1);

    } else if (key == 'desc') {
      // @ts-ignore
      this.selectCatalog = this.selectCatalog.sort((a, b) => a['price'] > b['price'] ? 1 : -1);

    } else {
      // @ts-ignore
      this.selectCatalog = this.selectCatalog.sort((a, b) => a[key] < b[key] ? 1 : -1);
    }
    this.filteredData = this.selectCatalog

    this.ShowItems()
    this.init_filter()

  }

  clean() {
    const array_number: number[] = this.selectCatalog.map(this.get_minMax)
    this.min = Math.min(...array_number)
    this.max = Math.max(...array_number)

    this.filter_list = [
      {'title': 'from', 'value': this.min, 'filtered': false, 'default': this.min},
      {'title': 'to', 'value': this.max, 'filtered': false, 'default': this.max},
      {'title': 'manufacturer', 'value': "", 'filtered': false, 'default': ""},
      {'title': 'type-drugstore', 'value': "", 'filtered': false, 'default': ""},
      {'title': 'favorite', 'value': false, 'filtered': false, 'default': false},
      {'title': 'discount', 'value': false, 'filtered': false, 'default': false},
      {'title': 'status', 'value': false, 'filtered': false, 'default': false},
    ];
    this.filters = [this.min, this.max, "", "", false, false, false];
    this.filtered = false
  }
  showPaginator() {
    // @ts-ignore
    this.paginator?.nativeElement.innerHTML = ""
    this.page._max = Math.ceil(this.filteredData.length / this.maxElement);

    for (let i = 0; i < this.page._max; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = "#header-title-catalog"
      li.classList.add('paginator-link');
      li.onclick = (event) => {
        this.pageChanged(event, i);
      }
      li.appendChild(a)
      this.paginator?.nativeElement.appendChild(li)
    }
  }
  ShowItems() {
    this.visibilityPage = []
    for (let i = this.maxElement * (this.page._current);
         i < this.maxElement * (this.page._current + 1);
         i++) {
      if (this.filteredData[i])
        this.visibilityPage.push(this.filteredData[i])
    }
  }
  pageChanged(event: Event, page: number): void {
    this.page._current = page;
    try {
      // @ts-ignore
      event.target.classList.add('select')
      if (event.target !== this.previous
      ) {
        this.previous.classList.remove('select')
      }
    } catch {

    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: page === 0 ? null : page,
      },
      queryParamsHandling: 'merge',
    });
    this.previous = event.target
    this.ShowItems()
  }

  @ViewChild('paginator') paginator: ElementRef | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private SubscribeService: SubscribeService) {
  }

  OpenCatalog(object: any) {
    this.filtered = false
    this.key_link = object
    this.key_string = this.key_link.replace('-', " ").replace('-', " ")
    this.selectCatalog = HeaderMenuComponent.getCatalogBy_key(object)
    if (this.selectCatalog != null) {
      this.filteredData = this.selectCatalog
      this.quantity = this.selectCatalog.length
      this.clean()
      this.get_manufacturer()
      this.showPaginator()
      this.ShowItems()
    }
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      this.page._current = +params['page'] ? +params['page'] : 0;
    });
    // @ts-ignore
    this.selectCatalog = HeaderMenuComponent.getCatalogBy_key(this.activatedRoute.snapshot.paramMap.get('id'))
    this.filteredData = this.selectCatalog
    this.clean()
    this.quantity = this.selectCatalog.length
    this.get_manufacturer()
    this.showPaginator()
    this.ShowItems()

    // @ts-ignore
    this.key_link = this.activatedRoute.snapshot.paramMap.get('id');
    this.key_string = this.key_link.replace('-', " ").replace('-', " ");
    this.SubscribeService.subscribe$.subscribe((count) => this.OpenCatalog(count))
  }
}
