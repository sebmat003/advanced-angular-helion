import { Component } from '@angular/core';
import { NgContentComponent } from './1-ng-content/ng-content.component';
import { ChangeDetectionComponent } from './2-change-detection/change-detection.component';
import { TemplateVariablesComponent } from './3-template-variables/template-variables.component';
import { ViewChildContentChildComponent } from './4-viewchild-contentchild/viewchild-contentchild.component';
import { AfterRenderComponent } from './5-afterRender/afterRender.component';
import { DynamicComponent } from './6-dynamic-component/dynamic.component';
import { AbstractClassUsageComponent } from './7-abstract-class/abstract-class-usage.component';
import { ResolverUsageComponent } from './8-resolver/resolver-usage.component';
import { DiProvidersComponent } from './9-di-providers/di-providers.component';
import { Renderer2Component } from './10-renderer2/renderer2.component';
import { DeferComponent } from './11-defer/defer.component';
import { PipesComponent } from './12-pure-impure-pipes/pipes.component';
import { SvgComponent } from './13-svg-organization/svg.component';
import { CustomValidatorComponent } from './14-custom-validator/custom-validator.component';
import { DynamicFormsComponent } from './15-dynamic-forms/dynamic-forms.component';
import { RoutingComponent } from './16-routing/routing.component';
import { LanguageComponent } from './17-language-service/language.component';
import { LoginComponent } from './18-login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NgContentComponent,
    ChangeDetectionComponent,
    TemplateVariablesComponent,
    ViewChildContentChildComponent,
    AfterRenderComponent,
    DynamicComponent,
    AbstractClassUsageComponent,
    ResolverUsageComponent,
    DiProvidersComponent,
    Renderer2Component,
    DeferComponent,
    PipesComponent,
    SvgComponent,
    CustomValidatorComponent,
    DynamicFormsComponent,
    RoutingComponent,
    LanguageComponent,
    LoginComponent,
  ],
})
export class AppComponent {}
