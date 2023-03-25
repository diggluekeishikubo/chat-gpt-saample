import { Component, OnInit } from '@angular/core';
import { ChatGptService } from '../chat-gpt.service';

@Component({
  selector: 'app-prompt-ui',
  template: `
      <div class="container" style="width: 30rem">
          <textarea  [(ngModel)]="prompt" placeholder="Enter your prompt"></textarea>
          <button (click)="sendPrompt(prompt)">送信</button>
          <p>回答</p>
          <div class="answer">{{answer}}</div>
      </div>
  `,
  styleUrls: [ './prompt-ui.component.scss' ]
})
export class PromptUiComponent implements OnInit {

  prompt = '';
  answer: string = '';

  constructor(
    private chatGpt: ChatGptService
  ) {
  }

  ngOnInit(): void {
  }

  sendPrompt(prompt: string) {
    if (prompt) {
      this.chatGpt.send(prompt).subscribe(answer => {
        this.answer = answer;
      });
    }
  }
}
