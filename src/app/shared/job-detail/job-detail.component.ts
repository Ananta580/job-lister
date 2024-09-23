import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobApplication } from '../../models/job.search';
import { DummyImagepipe } from '../../pipes/dummyImage.pipe';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, DummyImagepipe],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
})
export class JobDetailComponent {
  @Input() jobId?: string;
  job: JobApplication = {
    job_id: 'zAaapsyXs8czr939AAAAAA==',
    employer_name: 'Clio - Cloud-Based Legal Technology',
    employer_logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9CIXY0D8hjFsXqjO0eO3uF5CqZ-tgctTW2aj&s=0',
    employer_website: 'https://www.clio.com',
    employer_linkedin: undefined,
    job_publisher: 'LinkedIn',
    job_employment_type: 'FULLTIME',
    job_title: 'Software Developer, Co-op',
    job_posted_at_datetime_utc: '2024-09-17T17:35:47.000Z',
    job_city: 'Toronto',
    job_state: 'ON',
    job_country: 'CA',
  };
}
