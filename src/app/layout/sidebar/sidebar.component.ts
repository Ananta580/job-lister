import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MENU_LIST } from '../../app.routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menu= MENU_LIST;

}
