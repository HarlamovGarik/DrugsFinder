import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipeService {
  public search$ = new Subject<string>();

  constructor(
  ) { }
  public Search(key: string) {
    this.search$.next(key);
  }
}
