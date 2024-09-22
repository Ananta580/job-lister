import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobApplication } from '../models/job.search';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private landingPageJobsSubject: BehaviorSubject<JobApplication[] | null> =
    new BehaviorSubject<JobApplication[] | null>([
      {
        job_id: '_10fNN2ISCG4dlASAAAAAA==',
        employer_name: 'Planview Incorporated',
        employer_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgUm3NpYfcS4DP3rd7hQcXtQcl8PXd4bqXppB&s=0',
        employer_website: 'http://www.planview.com',
        employer_linkedin: undefined,
        job_publisher: 'Planview | Careers',
        job_employment_type: 'INTERN',
        job_title: 'Software Engineer I - Coop/Intern (Cloud)',
        job_posted_at_datetime_utc: '2024-09-20T16:41:00.000Z',
        job_city: 'Vancouver',
        job_state: 'BC',
        job_country: 'CA',
      },
      {
        job_id: '-MA24F9V8CAnXGguAAAAAA==',
        employer_name: 'Cognizant',
        employer_logo: undefined,
        employer_website: undefined,
        employer_linkedin: undefined,
        job_publisher: 'Cognizant Careers',
        job_employment_type: 'FULLTIME',
        job_title: 'Software Engineering Co-op (Canada)',
        job_posted_at_datetime_utc: '2024-07-09T00:00:00.000Z',
        job_city: undefined,
        job_state: undefined,
        job_country: 'CA',
      },
      {
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
      },
      {
        job_id: 'gsBeS0zpnIdci1t3AAAAAA==',
        employer_name: 'remitly',
        employer_logo:
          'https://cdn.kscope.io/9972e2bbf14145d39a83b2d0cf7692a8-remitlylogo4.jpg',
        employer_website: 'http://www.remitly.com',
        employer_linkedin: undefined,
        job_publisher: 'Remitly Careers',
        job_employment_type: 'INTERN',
        job_title: 'Software Engineering Co-op Jan 2025',
        job_posted_at_datetime_utc: '2024-09-16T00:00:00.000Z',
        job_city: 'New Westminster',
        job_state: 'BC',
        job_country: 'CA',
      },
      {
        job_id: '152kXKrokv9Uis3bAAAAAA==',
        employer_name: 'Intuit',
        employer_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_Flout7UXwcKW-HyidblhEZLwv5KxQymI_mZ&s=0',
        employer_website: 'http://www.intuit.com',
        employer_linkedin: undefined,
        job_publisher: 'Intuit Careers',
        job_employment_type: 'INTERN',
        job_title: 'Software Developer Co-op (Winter 2025 - 4 Months)',
        job_posted_at_datetime_utc: '2024-09-10T00:00:00.000Z',
        job_city: 'Toronto',
        job_state: 'ON',
        job_country: 'CA',
      },
      {
        job_id: 'IytzR5UQVqiaPOywAAAAAA==',
        employer_name: 'Lumerate',
        employer_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvfrMHlzRFwO0TM7jrKp3xplfpJf9mo9k4C3V&s=0',
        employer_website: 'https://www.lumerate.com',
        employer_linkedin: undefined,
        job_publisher: 'LinkedIn',
        job_employment_type: 'FULLTIME',
        job_title: 'Software Developer Co-op (8 Months)',
        job_posted_at_datetime_utc: '2024-09-16T00:00:00.000Z',
        job_city: undefined,
        job_state: undefined,
        job_country: 'CA',
      },
      {
        job_id: 'WCDrXVAuH7Jy8Zw6AAAAAA==',
        employer_name: 'MesoMat',
        employer_logo: undefined,
        employer_website: undefined,
        employer_linkedin: undefined,
        job_publisher: 'Indeed',
        job_employment_type: 'INTERN',
        job_title: 'Co-op Software Engineer',
        job_posted_at_datetime_utc: '2024-02-20T15:30:20.000Z',
        job_city: 'Hamilton',
        job_state: 'ON',
        job_country: 'CA',
      },
      {
        job_id: '9imMbWQVI0mEknCEAAAAAA==',
        employer_name: 'Ericsson',
        employer_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15_cfG36CuQXHiMtmhauncaKJN4EWgR_8_npY&s=0',
        employer_website: 'http://www.ericsson.com',
        employer_linkedin: undefined,
        job_publisher: 'Jobs At Ericsson',
        job_employment_type: 'FULLTIME',
        job_title: '5G Software Developer Co-op Winter 2025',
        job_posted_at_datetime_utc: '2024-09-09T21:08:25.000Z',
        job_city: 'Ottawa',
        job_state: 'ON',
        job_country: 'CA',
      },
      {
        job_id: 'VmPYp6TStZmWGDIeAAAAAA==',
        employer_name: 'Stably AI',
        employer_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm725QL1O7e3dDftGbqnRuACaRrT1HF4Sxn0mY&s=0',
        employer_website: undefined,
        employer_linkedin: undefined,
        job_publisher: 'LinkedIn',
        job_employment_type: 'INTERN',
        job_title: 'Full Stack Engineer Co-Op Internship',
        job_posted_at_datetime_utc: '2024-09-20T20:14:28.000Z',
        job_city: undefined,
        job_state: undefined,
        job_country: 'CA',
      },
      {
        job_id: 's5p85WYnzoTVg9jhAAAAAA==',
        employer_name: 'Cohere',
        employer_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_0CPxBvvqdoFQiGOnpDACy5lWI6kP2AZgcSA&s=0',
        employer_website: 'http://cohere.com',
        employer_linkedin: undefined,
        job_publisher: 'Lever',
        job_employment_type: 'FULLTIME',
        job_title: 'Software Engineer Intern/Co-op (Winter 2025)',
        job_posted_at_datetime_utc: '2024-09-17T00:00:00.000Z',
        job_city: 'San Francisco',
        job_state: 'CA',
        job_country: 'US',
      },
    ]);
  public landingPageJobs$: Observable<JobApplication[] | null> =
    this.landingPageJobsSubject.asObservable();

  constructor() {}

  getLandingPageJobs(): Observable<JobApplication[] | null> {
    return this.landingPageJobs$;
  }

  setLandingPageJobs(jobs: JobApplication[] | null): void {
    this.landingPageJobsSubject.next(jobs);
  }
}
