import { Component } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers$ = new Subject();

  send(v: any) {
    this.numbers$.next(v);
  }
}
