import {Component} from '@angular/core';
import {GsonReaderService} from "./service/gson-reader.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DrugsFinder';
  jsonDataResult: any;

  constructor(
    private catalog: GsonReaderService) {
  }


}
