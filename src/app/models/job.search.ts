export interface JobSearchParams {
  query: string;
  page: number;
  num_pages: number;
  date_posted: 'all' | 'today' | '3days' | 'week' | 'month';
  fields?: string;
}

export interface JobSearchResponse {
  data: JobApplication[];
}

export interface JobApplication {
  job_id: string;
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  employer_company_type: string;
  employer_linkedin: string | null;
  job_publisher: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  apply_options: ApplyOption[];
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits: string | null;
  job_google_link: string;
  job_offer_expiration_datetime_utc: string;
  job_offer_expiration_timestamp: number;
  job_required_experience: JobRequiredExperience;
  job_required_skills: string[];
  job_required_education: JobRequiredEducation;
  job_experience_in_place_of_education: boolean;
  job_min_salary: number;
  job_max_salary: number;
  job_salary_currency: string | null;
  job_salary_period: string | null;
  job_highlights: Record<string, any>;
  job_job_title: string;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_occupational_categories: string | null;
  job_naics_code: string;
  job_naics_name: string;
}

export interface ApplyOption {
  publisher: string;
  apply_link: string;
  is_direct: boolean;
}

export interface JobRequiredExperience {
  no_experience_required: string;
  required_experience_in_months: number | null;
  experience_mentioned: string;
  experience_preferred: string;
}

export interface JobRequiredEducation {
  postgraduate_degree: boolean;
  professional_certification: boolean;
  high_school: boolean;
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: string;
  degree_preferred: string;
  professional_certification_mentioned: string;
}
