import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Contact} from "../shared/models/contact.model";
import {ContactService} from "../shared/services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Property} from "../shared/models/property.model";
import {PropertyService} from "../shared/services/property.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  contacts: Observable<Contact[]>
  properties: Observable<Property[]>

  constructor(private contactService: ContactService,
              private propertyService: PropertyService,
              private reouter: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.contacts = this.contactService.getAll();
    this.properties = this.propertyService.getAll();

  }

  onNewContact() {
    this.reouter.navigate(['new'], { relativeTo: this.route });
  }
}
