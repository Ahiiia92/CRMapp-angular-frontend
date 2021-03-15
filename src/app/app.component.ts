import {Component, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CRM App';
  loadedFeature = 'contact';
  @ViewChild('sidebar') sidebar : SidebarComponent;
  public enableGestures: boolean = false;
  public type: string = 'Push';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  public onCreated(args: any) {
    this.sidebar.element.style.visibility = '';
  }

  closeClick(): void {
    this.sidebar.hide();
  }

  toggleClick(): void {
    this.sidebar.toggle();
  }
}
