import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../../shared/contact.model";
import {ContactService} from "../../shared/services/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
  collapsed = false;
  // contacts: Contact[] = [
  //   new Contact('Marie', "Dujardin", '46 rue de la Paix, 95483 Paris', 'Architect'),
  //   new Contact('Aya', "Dtzéch", '5 avenue MLK, 38920 Montpellier', 'Surgeon')
  // ];
  @Output() contactWasSelected = new EventEmitter<Contact>();

  // constructor() { }

  // ngOnInit(): void {
  // }

  // Link with BE
  contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getAll().subscribe(data => {
      console.log(data);
      this.contacts = data;
    })
  }

  onContactSelected(contact: Contact) {
    this.contactWasSelected.emit(contact);
    console.log('Contact was been selected! Contact-list Component');
  }
}
