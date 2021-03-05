import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ContactService} from "../../shared/services/contact.service";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.sass']
})
export class ContactEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute,
              private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      });
  }

  private initForm() {
    let contactName = '';
    let contact = '';

    if (this.editMode) {
      const contact = this.contactService.show(this.id);
      // contactName = contact.firstname;
    }
  }

}
