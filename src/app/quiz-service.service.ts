import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './models/Quiz'

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private httpclient:HttpClient) { }

  get(url: string):Observable<Quiz[]> {
    return this.httpclient.get<Quiz[]>(url);
  }
}
