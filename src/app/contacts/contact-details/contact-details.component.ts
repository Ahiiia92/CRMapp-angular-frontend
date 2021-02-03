import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../shared/contact.model";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
