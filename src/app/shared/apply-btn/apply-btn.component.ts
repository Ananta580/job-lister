import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apply-btn',
  standalone: true,
  imports: [],
  templateUrl: './apply-btn.component.html',
  styleUrl: './apply-btn.component.scss',
})
export class ApplyBtnComponent {
  @Input() url?: string;
}
