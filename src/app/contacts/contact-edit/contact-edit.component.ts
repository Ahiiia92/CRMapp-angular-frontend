import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ContactService} from "../../shared/services/contact.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Contact} from "../../shared/models/contact.model";
import {Observable} from "rxjs";
import {ContactStatus} from "../../shared/models/contactstatus-enums.model";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.sass']
})
export class ContactEditComponent implements OnInit {
  id: number;
  editMode = false;
  submitted = false;
  contactForm: FormGroup;
  contact: Contact = new Contact();
  contactToUpdate: Contact;
  StateEnum = ContactStatus;
  state = ContactStatus.lead;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }

  onSubmit() {
    if (this.editMode) {
      this.update();
    } else {
      this.create();
    }
    this.goToList();
  }

  goToList() {
    this.router.navigate(['/contacts'], { relativeTo: this.route });
  };

  private initForm() {
    if (this.editMode) {
      const contact = this.contactService.show(this.id);
      contact
        .pipe(first())
        .subscribe((resData) => {
          this.contactForm.patchValue(resData);
          this.contact = this.contactForm.value;
        });
    }

    this.contactForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'profession': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'comment': new FormControl(null),
      'contact_status': new FormControl(null)
    })

  }

  /**
   * Create a Contact
   */
    private create() {
      this.contact = this.contactForm.value;
      this.contactService.save(this.contact)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            this.contact = this.contactForm.value;
          }, error => {
            console.log(error.message);
          }
        );
    }

  /**
   * Update a Contact
   */
  private update() {
    this.contact = this.contactForm.value;
    this.contactService.update(this.id, this.contact)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          console.log('Form: ' + this.contactForm);
          console.log('Recipe: ' + this.contact);
          console.log('RecipeToUpdate: ' + this.contactToUpdate);
          this.contactToUpdate = this.contactForm.value;
        }, error => {
          console.log(error);
        }
      );
  }


}
