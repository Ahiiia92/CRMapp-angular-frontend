import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../shared/contact.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  @Input() selectedContact: Contact;
  constructor() { }

  ngOnInit(): void {
  }
}
