import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidebar') sidebar : SidebarComponent;
  public enableGestures: boolean = false;
  public type: string = 'Push';

  constructor() { }

  ngOnInit(): void {
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
