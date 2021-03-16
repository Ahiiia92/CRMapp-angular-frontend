import {Component, Input, OnInit, Output} from '@angular/core';
import {Property} from "../../shared/models/property.model";
import {Subscription} from "rxjs";
import {PropertyService} from "../../shared/services/property.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.sass']
})
export class PropertyDetailComponent implements OnInit {
  show = false;
  id: number;
  private propertyChangesub: Subscription;
  property: Property;
  // @Input() property: Property;

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.property = new Property();
        this.propertyChangesub = this.propertyService.showProperty(this.id)
          .subscribe(data => {
            this.property = data;
          }, error => {
            console.log(error.message);
          });
      }, error => {
        console.log(error.message);
      }
    );
  }

}
