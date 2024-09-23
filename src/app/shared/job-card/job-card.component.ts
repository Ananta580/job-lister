import { Component, Input } from '@angular/core';
import { JobApplication } from '../../models/job.search';
import { CommonModule } from '@angular/common';
import { FilterNullPipe } from '../../pipes/filterNull.pipe';
import { DummyImagepipe } from '../../pipes/dummyImage.pipe';
import { ApplyBtnComponent } from '../apply-btn/apply-btn.component';
import { DrawerService } from '../../services/drawer.service';
import { JobDetailComponent } from '../job-detail/job-detail.component';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, FilterNullPipe, DummyImagepipe, ApplyBtnComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  @Input() job?: JobApplication;
  constructor(private drawerService: DrawerService) {}

  openJobDrawer(job_id?: string) {
    this.drawerService.open(JobDetailComponent, { jobId: job_id });
  }
}
