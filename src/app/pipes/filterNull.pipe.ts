import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNull',
  standalone: true,
})
export class FilterNullPipe implements PipeTransform {
  transform(values: any[]): string {
    return values.filter((v) => v !== null && v !== undefined).join(', ');
  }
}
