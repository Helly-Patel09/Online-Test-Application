import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { QuizServiceService } from '../quiz-service.service'
import { Quiz } from '../models/Quiz'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizname:string;
  quizInfo:Quiz[];
  score:number = 0;
  constructor(private quizService:QuizServiceService, private router: Router) { }

  quizForm = new FormGroup({})

  ngOnInit(): void {
    this.loadQuiz('general_knowledge');
  }
  loadQuiz(quizName: string) {
    this.quizService.get('./assets/'+quizName+'.json').subscribe(data =>{
      data.forEach(q => {
        this.quizForm.addControl(String(q.id), new FormControl(0, [Validators.required]));
      });
      this.quizInfo=data
    });
    console.log("QuizInfo:"+this.quizInfo);
    if(quizName == 'general_knowledge')
      this.quizname='General Knowledge';
    else
      this.quizname='Science'
  }

  onSubmitQuiz() {
    this.score = 0;
    console.log(this.quizForm.value);
    for (const i in this.quizForm.value) {
      console.log(i);
      if(parseInt(this.quizForm.value[i]) === this.quizInfo[parseInt(i)-1].correctIndex) {
        this.score++;
      }
    }
    console.log("score:"+this.score);
    if(this.score>=8)
      alert("Congratulations... you passed this test.");
    else
      alert("Sorry, you failed this exam. Your marks is below 80%. Please try again");
    this.router.navigate(['result', {data: this.score}])
  }
}
