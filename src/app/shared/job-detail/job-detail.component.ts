import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { JobApplication } from '../../models/job.search';
import { DummyImagepipe } from '../../pipes/dummyImage.pipe';
import { JobService } from '../../services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../services/app.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, DummyImagepipe, HttpClientModule],
  providers: [JobService, AppService],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
})
export class JobDetailComponent implements OnInit {
  @Input() jobId?: string;

  job$: Observable<JobApplication | null> = this.dataService.currentJob$;

  isLoading = false;
  constructor(
    private jobService: JobService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.loadJobDetails();
  }

  loadJobDetails() {
    this.job$
      .subscribe((job) => {
        if (job == null || job?.job_id !== this.jobId) {
          this.isLoading = true;
          this.jobService.jobDetail(this.jobId ?? '').subscribe((job) => {
            this.isLoading = false;
            this.dataService.setCurrentJob(job);
          });
        }
      })
      .unsubscribe();
  }
}
