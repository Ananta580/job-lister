import { CommonModule } from '@angular/common';
import {
  Component,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent implements OnDestroy {
  @ViewChild('drawerContent', { read: ViewContainerRef, static: true })
  drawerContent!: ViewContainerRef;

  private dynamicComponentRef!: ComponentRef<any>;

  constructor(private drawerService: DrawerService) {}

  attachComponent(componentRef: ComponentRef<any>) {
    // Store the dynamic component reference for cleanup
    this.dynamicComponentRef = componentRef;

    // Inject the dynamic component into the drawer's ViewContainerRef
    this.drawerContent.insert(this.dynamicComponentRef.hostView);
  }

  close() {
    this.dynamicComponentRef?.destroy();
    this.drawerService.close();
  }

  ngOnDestroy() {
    this.dynamicComponentRef?.destroy(); // Ensure cleanup on destroy
  }
}
