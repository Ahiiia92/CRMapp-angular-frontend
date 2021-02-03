import { Component, OnInit } from '@angular/core';
import {Contact} from "../../shared/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
  collapsed = false;
  contacts: Contact[] = [
    new Contact('Marie', "Dujardin", '46 rue de la Paix, 95483 Paris', 'Architect')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
