import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormRecord,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuizService } from './quiz.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  imports: [
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [QuizService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormsComponent {
  private readonly quizService = inject(QuizService);
  quiz = toSignal(this.quizService.getRandomQuiz());
  quizForm = new FormRecord({});
  submitted = false;
  result = 0;

  constructor() {
    this.quiz()?.questions.forEach((question, index) => {
      if (question.rightAnswers.length === 1) {
        this.quizForm.addControl(
          'question' + index,
          new FormGroup({
            selectedAnswer: new FormControl(null, [Validators.required]),
          }),
        );
      } else {
        const answers = new FormGroup({});
        question.answers.forEach((_, idx) =>
          answers.addControl('answer' + idx, new FormControl()),
        );
        this.quizForm.addControl('question' + index, answers);
      }
    });
  }

  submitQuiz() {
    this.submitted = true;
    this.quizForm.disable();
    this.calculateResult();
  }

  calculateResult() {
    const formValue = this.quizForm.getRawValue();
    this.quiz()?.questions.forEach((question, index) => {
      const questionValue = formValue['question' + index];
      if (question.rightAnswers.length === 1) {
        if (question.rightAnswers.includes(questionValue.selectedAnswer)) {
          this.result += 1;
        }
      } else {
        const selectedAnswers = Object.values(questionValue).reduce<number[]>(
          (indexes, isSelected, index) =>
            isSelected ? [...indexes, index] : indexes,
          [],
        );
        if (
          selectedAnswers.length === question.rightAnswers.length &&
          question.rightAnswers.every((correctIndex) =>
            selectedAnswers.includes(correctIndex),
          )
        ) {
          this.result += 1;
        }
      }
    });
  }
}
