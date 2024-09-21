import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { JobSearchParams, JobApplication } from '../../models/job.search';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchQuery: string = '';
  queryParam: JobSearchParams = {
    query: '',
    page: 1,
    num_pages: 1,
    date_posted: 'all',
    fields:
      'job_id, employer_name, employer_logo, employer_website, employer_linkedin, job_publisher, job_employment_type, job_title, job_posted_at_datetime_utc, job_city, job_state, job_country',
  };

  constructor(
    private jobService: JobService,
    private dataService: DataService
  ) {}

  searchJobs() {
    this.jobService
      .jobSearch({ ...this.queryParam, query: `${this.searchQuery}, Canada` })
      .subscribe((data: JobApplication[]) => {
        this.dataService.setLandingPageJobs(data);
      });
  }
}
