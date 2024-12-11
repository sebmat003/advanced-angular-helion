import { Injectable } from '@angular/core';
import { Quiz } from './quiz.interfaces';
import { Observable, of } from 'rxjs';
import { QUIZ_DATA } from './quiz.data';

@Injectable()
export class QuizService {
  getRandomQuiz(): Observable<Quiz> {
    return of(QUIZ_DATA[Math.floor(Math.random() * 3)]);
  }
}
