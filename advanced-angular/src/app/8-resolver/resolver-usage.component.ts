import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Data } from './data.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-resolver-usage',
  templateUrl: './resolver-usage.component.html',
  providers: [DataService],
})
export class ResolverUsageComponent {
  protected data: WritableSignal<Data | undefined> = signal(undefined);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.data.pipe(take(1)).subscribe(({ data }) => {
      this.data.set(data);
    });
  }
}
