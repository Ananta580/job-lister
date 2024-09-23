import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dummyImage',
  standalone: true,
})
export class DummyImagepipe implements PipeTransform {
  transform(name?: string): string {
    const color = this.extToNamedColor(name ?? '');
    console.log('color', color);
    return `https://placehold.co/50/${color}/white?text=${name}&font=Open%20Sans`;
  }

  extToNamedColor(text: string) {
    // Array of named colors
    const colors = ['orange', 'blue', 'green', 'purple', 'red', 'cyan', 'teal'];

    // Hash the input text to a numeric value
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash); // Simple hash calculation
    }

    // Get the index by taking the modulus of the hash with the length of the colors array
    const index = Math.abs(hash) % colors.length;

    // Return the corresponding color
    return colors[index];
  }
}
