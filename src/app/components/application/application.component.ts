import { Component, ViewEncapsulation } from '@angular/core';
import {ProductService} from "../../services/product-service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation: ViewEncapsulation.None, // TODO: почитать, что это и зачем
})
export class ApplicationComponent {}
