import {
  Injectable,
  ComponentRef,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
} from '@angular/core';
import { DrawerComponent } from '../shared/drawer/drawer.component';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawerComponentRef!: ComponentRef<DrawerComponent>;

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  open(component: any, componentProps: any = {}): void {
    // Create a component reference from the target component (dynamically loaded component)
    let componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // Pass inputs to the dynamically created component
    Object.keys(componentProps).forEach((prop) => {
      componentRef.setInput(prop, componentProps[prop]);
    });

    // Don't attach the dynamic component's view to ApplicationRef, just handle it through ViewContainerRef
    // Attach the drawer component to the appRef
    this.drawerComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(DrawerComponent)
      .create(this.injector);

    // Attach the drawer component to the Angular app
    this.applicationRef.attachView(this.drawerComponentRef.hostView);

    // Append the drawer to the DOM
    const drawerDomElem = (
      this.drawerComponentRef.hostView as EmbeddedViewRef<any>
    ).rootNodes[0] as HTMLElement;
    document.body.appendChild(drawerDomElem);

    // Inject the dynamic component into the drawer content (ViewContainerRef)
    this.drawerComponentRef.instance.attachComponent(componentRef);
  }

  close(): void {
    if (this.drawerComponentRef) {
      this.applicationRef.detachView(this.drawerComponentRef.hostView);
      this.drawerComponentRef.destroy();
    }
  }
}
