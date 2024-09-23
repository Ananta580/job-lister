import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { JobApplication } from '../../models/job.search';
import { DummyImagepipe } from '../../pipes/dummyImage.pipe';
import { JobService } from '../../services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../services/app.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { FilterNullPipe } from '../../pipes/filterNull.pipe';
import { FormatTextPipe } from '../../pipes/format-text.pipe';
import { ApplyBtnComponent } from '../apply-btn/apply-btn.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    CommonModule,
    DummyImagepipe,
    HttpClientModule,
    FilterNullPipe,
    FormatTextPipe,
    RouterModule,
    ApplyBtnComponent,
  ],
  providers: [JobService, AppService],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
})
export class JobDetailComponent implements OnInit {
  @Input() jobId?: string;

  job$: Observable<JobApplication | null> = this.dataService.currentJob$;

  isLoading = false;
  fullPage = false;
  constructor(
    private jobService: JobService,
    private dataService: DataService,
    private _route: ActivatedRoute,
    private drawerService: DrawerService
  ) {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.drawerService.close();
      this.fullPage = true;
      this.jobId = id;
    }
  }

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
