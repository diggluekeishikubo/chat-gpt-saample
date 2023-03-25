import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-prompt-ui></app-prompt-ui>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-gpt-sample';
}
