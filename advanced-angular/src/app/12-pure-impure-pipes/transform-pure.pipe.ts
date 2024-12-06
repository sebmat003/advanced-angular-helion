import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPure',
})
export class TransformPurePipe implements PipeTransform {
  transform(value: string, uppercase = false) {
    console.log('Pure pipe transform');
    let msg = `My custom transformation of ${value}.`;
    if (uppercase) {
      return msg.toUpperCase();
    } else {
      return msg;
    }
  }
}
