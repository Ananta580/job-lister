import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from './services/job.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent,TopbarComponent, HttpClientModule],
  providers: [AppService, JobService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job-lister';
}
