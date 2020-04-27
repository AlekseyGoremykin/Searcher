import {Component} from '@angular/core';
import {AppGuardGuard} from "./app-guard.guard";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  col = '#3f51b5';

  constructor(public out: AppGuardGuard) {
  }
}
