import { Component, Input } from '@angular/core';
import { JobApplication } from '../../models/job.search';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  @Input() job?: JobApplication;
}
