import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dummyImage',
  standalone: true,
})
export class DummyImagepipe implements PipeTransform {
  colors = ['orange', 'blue', 'green', 'purple', 'red', 'cyan', 'teal'];

  transform(name?: string): string {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    return `https://placehold.co/50/${color}/white?text=${name}&font=Open%20Sans`;
  }
}
