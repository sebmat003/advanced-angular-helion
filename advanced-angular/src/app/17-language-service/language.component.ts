import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  imports: [TranslateModule],
  styleUrl: './language.component.scss',
  templateUrl: './language.component.html',
})
export class LanguageComponent {
  readonly LANGUAGES = ['pl', 'en', 'de'];
  translateService = inject(TranslateService);

  changeLanguage(language: string) {
    this.translateService.use(language);
  }
}
