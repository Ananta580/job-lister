import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobApplication } from '../models/job.search';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private landingPageJobsSubject: BehaviorSubject<JobApplication[] | null> =
    new BehaviorSubject<JobApplication[] | null>(null);
  public landingPageJobs$: Observable<JobApplication[] | null> =
    this.landingPageJobsSubject.asObservable();

  private findWorkPageJobsSubject: BehaviorSubject<JobApplication[] | null> =
    new BehaviorSubject<JobApplication[] | null>(null);
  public findWorkPageJobs$: Observable<JobApplication[] | null> =
    this.findWorkPageJobsSubject.asObservable();

  private currentJobSubject: BehaviorSubject<JobApplication | null> =
    new BehaviorSubject<JobApplication | null>(null);
  public currentJob$: Observable<JobApplication | null> =
    this.currentJobSubject.asObservable();

  constructor() {}

  getLandingPageJobs(): Observable<JobApplication[] | null> {
    return this.landingPageJobs$;
  }

  setLandingPageJobs(jobs: JobApplication[] | null): void {
    this.landingPageJobsSubject.next(jobs);
  }

  getFindWorkPageJobs(): Observable<JobApplication[] | null> {
    return this.findWorkPageJobs$;
  }

  setFindWorkPageJobs(jobs: JobApplication[] | null): void {
    this.findWorkPageJobsSubject.next(jobs);
  }

  getCurrentJob(): Observable<JobApplication | null> {
    return this.currentJob$;
  }

  setCurrentJob(job: JobApplication | null): void {
    this.currentJobSubject.next(job);
  }
}
