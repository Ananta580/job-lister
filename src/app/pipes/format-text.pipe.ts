import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'formatText',
  standalone: true,
})
export class FormatTextPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';

    const formattedText = value
      .replace(/\n\n/g, '</br></br>')
      .replace(/\n/g, '<br>')
      .replace(/•/g, '<span class="pl-5"></span>•');

    return this.sanitizer.bypassSecurityTrustHtml(`<p>${formattedText}</p>`);
  }
}
