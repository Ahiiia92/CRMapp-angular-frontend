import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Contact} from "../shared/contact.model";
import {ContactService} from "../shared/services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  contacts: Observable<Contact[]>

  constructor(private contactService: ContactService,
              private reouter: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.contacts = this.contactService.getAll();
  }

  onNewContact() {
    this.reouter.navigate(['new'], { relativeTo: this.route });
  }
}
