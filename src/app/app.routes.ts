import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobDetailComponent } from './shared/job-detail/job-detail.component';
import { FindWorkComponent } from './pages/find-work/find-work.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

export const APP_ROUTES = {
  DASHBOARD: '',
  FIND_WORK: 'find-work',
  MY_JOBS: 'my-jobs',
  ACTIVITY: 'activity',
  TRACKING: 'tracking',
  NOTIFICATIONS: 'notifications',
};

export const MENU_LIST = [
  {
    name: 'Dashboard',
    icon: 'home',
    url: `/${APP_ROUTES.DASHBOARD}`,
    active: false,
  },
  {
    name: 'Find Work',
    icon: 'travel_explore',
    url: `/${APP_ROUTES.FIND_WORK}`,
    active: false,
  },
  {
    name: 'My Jobs',
    icon: 'work',
    url: `/${APP_ROUTES.MY_JOBS}`,
    active: false,
  },
  {
    name: 'Activity',
    icon: 'family_link',
    url: `/${APP_ROUTES.ACTIVITY}`,
    active: false,
  },
  {
    name: 'Tracking',
    icon: 'bar_chart',
    url: `/${APP_ROUTES.TRACKING}`,
    active: false,
  },
  {
    name: 'Notifications',
    icon: 'notifications',
    url: `/${APP_ROUTES.NOTIFICATIONS}`,
    active: false,
  },
];
export const routes: Routes = [
  {
    path: APP_ROUTES.DASHBOARD,
    component: DashboardComponent,
  },
  {
    path: APP_ROUTES.FIND_WORK,
    component: FindWorkComponent,
  },
  {
    path: APP_ROUTES.MY_JOBS,
    component: MyJobsComponent,
  },
  {
    path: APP_ROUTES.ACTIVITY,
    component: ActivityComponent,
  },
  {
    path: APP_ROUTES.TRACKING,
    component: TrackingComponent,
  },
  {
    path: APP_ROUTES.NOTIFICATIONS,
    component: NotificationsComponent,
  },
  {
    path: 'job/:id',
    component: JobDetailComponent,
  },
];
