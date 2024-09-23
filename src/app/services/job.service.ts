import {
  JobSearchParams,
  JobSearchResponse,
  JobApplication,
} from './../models/job.search';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private appService: AppService) {}

  jobSearch(searchParams: JobSearchParams): Observable<JobApplication[]> {
    return this.appService.get<JobSearchResponse>(`/search`, searchParams).pipe(
      map((response: JobSearchResponse) => {
        if (response.data) {
          return response.data.filter((job) => job.job_country === 'CA');
        }
        return [];
      })
    );
  }

  jobDetail(id: string): Observable<JobApplication> {
    return this.appService
      .get<JobSearchResponse>(`/job-details`, {
        job_id: id,
        extended_publisher_details: 'false',
      })
      .pipe(map((response: JobSearchResponse) => response.data[0]));
  }
}
