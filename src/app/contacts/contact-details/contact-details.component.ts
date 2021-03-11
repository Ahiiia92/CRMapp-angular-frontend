import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Contact} from "../../shared/models/contact.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ContactService} from "../../shared/services/contact.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  contact: Contact;
  show = false;
  id: number;
  private contactChangeSub: Subscription;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = params['id'];

          this.contact = new Contact();
          this.contactChangeSub = this.contactService.show(this.id)
            .subscribe(resData => {
              console.log(resData);
              this.contact = resData;
            }, error => {
              console.log(error.message);
            });
        }, error => {
          console.log(error.message);
        }
      );
  }

  ngOnDestroy() {
    this.contactChangeSub.unsubscribe();
  }

  onEditContact() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteContact(id: number) {
    this.contactService.delete(id)
      .subscribe(resData => {
        console.log(resData);
        this.router.navigate(['../'], {relativeTo: this.route});
        alert('Contact deleted!');
      }, error => {
        console.log(error.message);
      });
  }
}
