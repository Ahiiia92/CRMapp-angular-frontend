import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../shared/contact.model";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.sass']
})
export class ContactItemComponent implements OnInit {
  displayed = false;
  @Input() contact: Contact;
  constructor() { }

  ngOnInit(): void {
  }



}
