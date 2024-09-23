import { Component, OnInit } from '@angular/core';
import { JobApplication, JobSearchParams } from '../../models/job.search';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../shared/job-card/job-card.component';
import { TopbarComponent } from '../../layout/topbar/topbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  landingPageJobs$: Observable<JobApplication[] | null> =
    this.dataService.getLandingPageJobs();

  searchQuery: string = 'Coop Software Developer';
  queryParam: JobSearchParams = {
    query: '',
    page: 1,
    num_pages: 1,
    date_posted: 'today',
    fields:
      'job_id, employer_name, employer_logo, employer_website, employer_linkedin, job_publisher, job_employment_type, job_title, job_posted_at_datetime_utc, job_city, job_state, job_country',
  };

  isLoading = false;
  constructor(
    private jobService: JobService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loadSomeJobs();
  }

  loadSomeJobs() {
    this.landingPageJobs$
      .subscribe((jobs) => {
        if (jobs == null) {
          this.isLoading = true;
          this.jobService
            .jobSearch({
              ...this.queryParam,
              query: `${this.searchQuery}, Canada`,
            })
            .subscribe((data: JobApplication[]) => {
              this.dataService.setLandingPageJobs(data);
              this.isLoading = false;
            });
        }
      })
      .unsubscribe();
  }
}
