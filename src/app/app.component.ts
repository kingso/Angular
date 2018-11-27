import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{appTitle}}</h1>
              <pm-products></pm-products>
            </div>
            `
})
export class AppComponent {
  appTitle: string = 'Acme Product Management';
}
