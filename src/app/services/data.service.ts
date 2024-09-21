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
        employer_company_type: 'Information',
        employer_linkedin: null,
        job_publisher: 'Planview | Careers',
        job_employment_type: 'INTERN',
        job_title: 'Software Engineer I - Coop/Intern (Cloud)',
        job_apply_link:
          'https://careers.planview.com/careers-home/jobs/4409?lang=en-us&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        job_apply_is_direct: true,
        job_apply_quality_score: 0.8239,
        apply_options: [
          {
            publisher: 'Planview | Careers',
            apply_link:
              'https://careers.planview.com/careers-home/jobs/4409?lang=en-us&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: true,
          },
          {
            publisher: 'LinkedIn',
            apply_link:
              'https://ca.linkedin.com/jobs/view/software-engineer-i-coop-intern-copilot-at-planview-4029546078?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Indeed',
            apply_link:
              'https://emplois.ca.indeed.com/viewjob?jk=919437abe6eef600&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'BeBee Canada Meet Opportunities',
            apply_link:
              'https://ca.bebee.com/job/abc19e0df441347392445eb8a8ee06d1?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Eluta.ca',
            apply_link:
              'https://m.eluta.ca/spl/software-engineer-i-coop-intern-viz-2f7179826dd15c4478fc4b471da0213e?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Talent.com',
            apply_link:
              'https://ca.talent.com/view?id=45b3ff74917a&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Glassdoor',
            apply_link:
              'https://www.glassdoor.ca/job-listing/software-engineer-i-coop-intern-cloud-planview-incorporated-JV_IC2278756_KO0,37_KE38,59.htm?jl=1009455308728&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Talentify',
            apply_link:
              'https://www.talentify.io/job/software-engineer-i-coopintern-viz-vancouver-british-columbia-ca-planview-1-4440?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
        ],
        job_description:
          "Company Overview\n\nPlanview has one mission: to build the future of connected work, from ideas to impact.\n\nAs the global leader in work and resource management, Planview helps organizations accelerate the achievement of what matters most, supporting our customers from need to speed, from passion to progress, and from overhead to optimization. We provide the industry’s most comprehensive solutions designed for strategic planning, portfolio and resource management, Lean and Agile delivery, product portfolio management, capability, and technology management (enterprise architecture), innovation management, and collaborative work and project management. Our connected platform of solutions underpins the business and digital transformations of more than 4,500 customers globally, including 59 of the Fortune 100.\n\nAt Planview, our people connections drive our innovation and success. Our global team of 1400+ work remotely and across our offices including Austin, Vancouver, Hod HaSharon, Bangalore, Sydney, and Stockholm. We’re proud of our world-class, connected culture built on our shared values, that supports our teams to be successful from anywhere.\n\nLearn more about our portfolio at planview.com, and connect with us on LinkedIn, Instagram, and X.\n\nThe Opportunity\n\nDo you want to gain valuable real-world experience to apply what you learn in your academic classes? Are you interested in finding out what career paths are available to you? If you answered ‘yes’, then you’ve come to the right place.\n\nAs a co-op student with Planview, you will get the opportunity to gain meaningful, paid work experience to support your academic learning. You will be supported in further developing your skills and have the chance to learn more about software development in a SaaS organization.\n\nWe’re looking for Junior Software Engineers on Flow Platform team to join our team in Vancouver, BC for an 8 month co-op term. In this role, you will work on a variety of development teams across our entire engineering group.\n\nJunior Software Engineers on the Cloud Infrastructure team will be challenged with a wide variety of technologies and responsibilities that will give you valuable skills for your career as a DevOps Engineer. The Cloud Infrastructure team has a large impact on the daily operations from everything from ensuring timely releases, supporting development infrastructure, and ensuring high uptime for our public-facing web services.\n\nStudents currently enrolled in an applicable co-op program at BCIT, UBC, UVic, or SFU will be considered for this role. Please note you must apply through your co-op office as well and provide your academic transcript with your application.\n\nWhat You'll Do\n• Leverage Planview’s private Azure OpenAI resources (ChatGPT) to assist/augment your learning and productivity.\n• Design, develop, and test applications in accordance with established standards.\n• Participate in peer reviews of source code.\n• Analyze, reproduce, and resolve infrastructure and application issues.\n• Develop and maintaining automation tools including release automation and infrastructure automation for both on-site and cloud assets (AWS, Azure).\n• Develop, test, and maintain internal and customer-facing web applications.\n• Evaluate best-of-breed tools that can add value, efficiency and optimisation to our operations.\n• Platform Engineering initiatives.\n• DevSecOps initiatives.\n\nWhat You'll Bring\n• Prompt Engineering\n• Linux systems administration\n• Bash scripting\n• Docker builds\n• AMI builds using Packer\n• Runbook automation using Ansible\n• CI/CD Pipeline development using Jenkins DSL and/or Pipeline, GitHub Actions\n• IaC on AWS & Azure using Terraform open-source\n• Python for tooling and automation\n• SCM using Git\n• ArgoCD\n• Java development, particularly SpringBoot\n• Scala\n• Machine Learning\n• Strong knowledge of IP networks\n• Proxy & reverse-proxy/load-balancing\n• Firewall configuration\n• HTTP protocol analysis\n• General knowledge of APIs, particularly RESTful\n\nBenefits at Planview\n\nAt Planview we highly value our co-op students and their contributions, and we place a strong emphasis on mentorship and guidance to help our Junior Software Engineers build a strong foundation for their professional careers.\n\nAs a co-op student with Planview you’ll get:\n• Expected Salary Range for this role: $3500 to $4700 per month\n• Weekly office lunches, lunch and learns, and social events\n• Unplugged Days: additional time way away from work to recharge\n\nIf you are looking for a place to gain practical experience, develop your professional skills, and build the future of connected work, apply today!\n\nEqual Employment Opportunity at Planview\n\nPlanview is proud to be an equal opportunity workplace and is an affirmative action employer. We are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, marital status, disability, gender identity or Veteran status.",
        job_is_remote: false,
        job_posted_at_timestamp: 1726850460,
        job_posted_at_datetime_utc: '2024-09-20T16:41:00.000Z',
        job_city: 'Vancouver',
        job_state: 'BC',
        job_country: 'CA',
        job_latitude: 49.28273,
        job_longitude: -123.120735,
        job_benefits: null,
        job_google_link:
          'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=software+engineering+coop,+canada&start=0&udm=8#vhid=vt%3D20/docid%3D_10fNN2ISCG4dlASAAAAAA%3D%3D&vssid=jobs-detail-viewer',
        job_offer_expiration_datetime_utc: '2024-10-11T13:00:00.000Z',
        job_offer_expiration_timestamp: 1728651600,
        job_required_experience: {
          no_experience_required: 'false',
          required_experience_in_months: null,
          experience_mentioned: 'true',
          experience_preferred: 'false',
        },
        job_required_skills: ['UNAVAILABLE'],
        job_required_education: {
          postgraduate_degree: false,
          professional_certification: false,
          high_school: false,
          associates_degree: false,
          bachelors_degree: false,
          degree_mentioned: 'true',
          degree_preferred: 'false',
          professional_certification_mentioned: 'false',
        },
        job_experience_in_place_of_education: false,
        job_min_salary: 0,
        job_max_salary: 0,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'Software engineer',
        job_posting_language: 'en',
        job_onet_soc: '15113200',
        job_onet_job_zone: '4',
        job_occupational_categories: null,
        job_naics_code: '511210',
        job_naics_name: 'Software Publishers',
      },
      {
        job_id: '_10fNN2ISCG4dlASAAAAAA==',
        employer_name: 'Planview Incorporated',
        employer_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgUm3NpYfcS4DP3rd7hQcXtQcl8PXd4bqXppB&s=0',
        employer_website: 'http://www.planview.com',
        employer_company_type: 'Information',
        employer_linkedin: null,
        job_publisher: 'Planview | Careers',
        job_employment_type: 'INTERN',
        job_title: 'Software Engineer I - Coop/Intern (Cloud)',
        job_apply_link:
          'https://careers.planview.com/careers-home/jobs/4409?lang=en-us&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        job_apply_is_direct: true,
        job_apply_quality_score: 0.8239,
        apply_options: [
          {
            publisher: 'Planview | Careers',
            apply_link:
              'https://careers.planview.com/careers-home/jobs/4409?lang=en-us&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: true,
          },
          {
            publisher: 'LinkedIn',
            apply_link:
              'https://ca.linkedin.com/jobs/view/software-engineer-i-coop-intern-copilot-at-planview-4029546078?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Indeed',
            apply_link:
              'https://emplois.ca.indeed.com/viewjob?jk=919437abe6eef600&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'BeBee Canada Meet Opportunities',
            apply_link:
              'https://ca.bebee.com/job/abc19e0df441347392445eb8a8ee06d1?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Eluta.ca',
            apply_link:
              'https://m.eluta.ca/spl/software-engineer-i-coop-intern-viz-2f7179826dd15c4478fc4b471da0213e?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Talent.com',
            apply_link:
              'https://ca.talent.com/view?id=45b3ff74917a&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Glassdoor',
            apply_link:
              'https://www.glassdoor.ca/job-listing/software-engineer-i-coop-intern-cloud-planview-incorporated-JV_IC2278756_KO0,37_KE38,59.htm?jl=1009455308728&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
          {
            publisher: 'Talentify',
            apply_link:
              'https://www.talentify.io/job/software-engineer-i-coopintern-viz-vancouver-british-columbia-ca-planview-1-4440?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
            is_direct: false,
          },
        ],
        job_description:
          "Company Overview\n\nPlanview has one mission: to build the future of connected work, from ideas to impact.\n\nAs the global leader in work and resource management, Planview helps organizations accelerate the achievement of what matters most, supporting our customers from need to speed, from passion to progress, and from overhead to optimization. We provide the industry’s most comprehensive solutions designed for strategic planning, portfolio and resource management, Lean and Agile delivery, product portfolio management, capability, and technology management (enterprise architecture), innovation management, and collaborative work and project management. Our connected platform of solutions underpins the business and digital transformations of more than 4,500 customers globally, including 59 of the Fortune 100.\n\nAt Planview, our people connections drive our innovation and success. Our global team of 1400+ work remotely and across our offices including Austin, Vancouver, Hod HaSharon, Bangalore, Sydney, and Stockholm. We’re proud of our world-class, connected culture built on our shared values, that supports our teams to be successful from anywhere.\n\nLearn more about our portfolio at planview.com, and connect with us on LinkedIn, Instagram, and X.\n\nThe Opportunity\n\nDo you want to gain valuable real-world experience to apply what you learn in your academic classes? Are you interested in finding out what career paths are available to you? If you answered ‘yes’, then you’ve come to the right place.\n\nAs a co-op student with Planview, you will get the opportunity to gain meaningful, paid work experience to support your academic learning. You will be supported in further developing your skills and have the chance to learn more about software development in a SaaS organization.\n\nWe’re looking for Junior Software Engineers on Flow Platform team to join our team in Vancouver, BC for an 8 month co-op term. In this role, you will work on a variety of development teams across our entire engineering group.\n\nJunior Software Engineers on the Cloud Infrastructure team will be challenged with a wide variety of technologies and responsibilities that will give you valuable skills for your career as a DevOps Engineer. The Cloud Infrastructure team has a large impact on the daily operations from everything from ensuring timely releases, supporting development infrastructure, and ensuring high uptime for our public-facing web services.\n\nStudents currently enrolled in an applicable co-op program at BCIT, UBC, UVic, or SFU will be considered for this role. Please note you must apply through your co-op office as well and provide your academic transcript with your application.\n\nWhat You'll Do\n• Leverage Planview’s private Azure OpenAI resources (ChatGPT) to assist/augment your learning and productivity.\n• Design, develop, and test applications in accordance with established standards.\n• Participate in peer reviews of source code.\n• Analyze, reproduce, and resolve infrastructure and application issues.\n• Develop and maintaining automation tools including release automation and infrastructure automation for both on-site and cloud assets (AWS, Azure).\n• Develop, test, and maintain internal and customer-facing web applications.\n• Evaluate best-of-breed tools that can add value, efficiency and optimisation to our operations.\n• Platform Engineering initiatives.\n• DevSecOps initiatives.\n\nWhat You'll Bring\n• Prompt Engineering\n• Linux systems administration\n• Bash scripting\n• Docker builds\n• AMI builds using Packer\n• Runbook automation using Ansible\n• CI/CD Pipeline development using Jenkins DSL and/or Pipeline, GitHub Actions\n• IaC on AWS & Azure using Terraform open-source\n• Python for tooling and automation\n• SCM using Git\n• ArgoCD\n• Java development, particularly SpringBoot\n• Scala\n• Machine Learning\n• Strong knowledge of IP networks\n• Proxy & reverse-proxy/load-balancing\n• Firewall configuration\n• HTTP protocol analysis\n• General knowledge of APIs, particularly RESTful\n\nBenefits at Planview\n\nAt Planview we highly value our co-op students and their contributions, and we place a strong emphasis on mentorship and guidance to help our Junior Software Engineers build a strong foundation for their professional careers.\n\nAs a co-op student with Planview you’ll get:\n• Expected Salary Range for this role: $3500 to $4700 per month\n• Weekly office lunches, lunch and learns, and social events\n• Unplugged Days: additional time way away from work to recharge\n\nIf you are looking for a place to gain practical experience, develop your professional skills, and build the future of connected work, apply today!\n\nEqual Employment Opportunity at Planview\n\nPlanview is proud to be an equal opportunity workplace and is an affirmative action employer. We are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, marital status, disability, gender identity or Veteran status.",
        job_is_remote: false,
        job_posted_at_timestamp: 1726850460,
        job_posted_at_datetime_utc: '2024-09-20T16:41:00.000Z',
        job_city: 'Vancouver',
        job_state: 'BC',
        job_country: 'CA',
        job_latitude: 49.28273,
        job_longitude: -123.120735,
        job_benefits: null,
        job_google_link:
          'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=software+engineering+coop,+canada&start=0&udm=8#vhid=vt%3D20/docid%3D_10fNN2ISCG4dlASAAAAAA%3D%3D&vssid=jobs-detail-viewer',
        job_offer_expiration_datetime_utc: '2024-10-11T13:00:00.000Z',
        job_offer_expiration_timestamp: 1728651600,
        job_required_experience: {
          no_experience_required: 'false',
          required_experience_in_months: null,
          experience_mentioned: 'true',
          experience_preferred: 'false',
        },
        job_required_skills: ['UNAVAILABLE'],
        job_required_education: {
          postgraduate_degree: false,
          professional_certification: false,
          high_school: false,
          associates_degree: false,
          bachelors_degree: false,
          degree_mentioned: 'true',
          degree_preferred: 'false',
          professional_certification_mentioned: 'false',
        },
        job_experience_in_place_of_education: false,
        job_min_salary: 0,
        job_max_salary: 0,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: 'Software engineer',
        job_posting_language: 'en',
        job_onet_soc: '15113200',
        job_onet_job_zone: '4',
        job_occupational_categories: null,
        job_naics_code: '511210',
        job_naics_name: 'Software Publishers',
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
