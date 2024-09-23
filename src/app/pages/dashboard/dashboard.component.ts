import { Component } from '@angular/core';
import { JobApplication } from '../../models/job.search';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../shared/job-card/job-card.component';
import { TopbarComponent } from '../../layout/topbar/topbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, JobCardComponent, TopbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  landingPageJobs$: Observable<JobApplication[] | null> =
    this.dataService.getLandingPageJobs();
  constructor(
    private jobService: JobService,
    private dataService: DataService
  ) {}
}
