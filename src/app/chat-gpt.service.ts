import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from '../environments/environment';

const configuration = new Configuration({
  apiKey: environment.apiKey // API KEYを入力 ,
});
const openai = new OpenAIApi(configuration);

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {

  constructor() {
  }

  send(prompt: string): Observable<string> {
    return from(openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.6,
    })).pipe(
      map(completion => {
        return completion.data.choices[ 0 ].text ?? '取得できませんでした';
      })
    );
  }
}
