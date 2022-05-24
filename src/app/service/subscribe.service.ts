import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public subscribe$ =  new Subject();
  constructor() { }

  public next(id: string){
   this.subscribe$.next(id)
  }
}
