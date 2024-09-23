import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { JobCardComponent } from '../../shared/job-card/job-card.component';
import { Observable } from 'rxjs';
import { JobApplication } from '../../models/job.search';
import { DataService } from '../../services/data.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-find-work',
  standalone: true,
  imports: [CommonModule, JobCardComponent, TopbarComponent],
  templateUrl: './find-work.component.html',
  styleUrl: './find-work.component.scss',
})
export class FindWorkComponent {
  findWorkPageJobs$: Observable<JobApplication[] | null> =
    this.dataService.getFindWorkPageJobs();
  constructor(
    private jobService: JobService,
    private dataService: DataService
  ) {}
}
