import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soles'
})
export class SolesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
