import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../../../shared/contact.model";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.sass']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() identifier: number;
  constructor() { }

  ngOnInit(): void {
  }
}
