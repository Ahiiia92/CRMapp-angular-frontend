import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../../shared/models/contact.model";
import {ContactService} from "../../shared/services/contact.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
  collapsed = false;
  @Output() contactWasSelected = new EventEmitter<Contact>();
  contacts: Observable<Contact[]>;

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  onNewContact() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  private reloadData() {
    this.contacts = this.contactService.getAll();
  }
}
