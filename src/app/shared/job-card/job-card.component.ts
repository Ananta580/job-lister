import { Component, Input } from '@angular/core';
import { JobApplication } from '../../models/job.search';
import { CommonModule } from '@angular/common';
import { FilterNullPipe } from '../../pipes/filterNull.pipe';
import { DummyImagepipe } from '../../pipes/dummyImage.pipe';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, FilterNullPipe, DummyImagepipe],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  @Input() job?: JobApplication;
}
