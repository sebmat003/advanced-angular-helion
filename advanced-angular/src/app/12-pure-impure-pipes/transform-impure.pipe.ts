import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformImpure',
  pure: false,
})
export class TransformImpurePipe implements PipeTransform {
  transform(value: string, uppercase = false) {
    console.log('Impure pipe transform');
    let msg = `My custom transformation of ${value}.`;
    if (uppercase) {
      return msg.toUpperCase();
    } else {
      return msg;
    }
  }
}
