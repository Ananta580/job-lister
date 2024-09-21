import { Component } from '@angular/core';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

}
