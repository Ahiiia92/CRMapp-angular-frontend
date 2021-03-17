import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Property } from 'src/app/shared/models/property.model';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PropertyService} from "../../shared/services/property.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.sass']
})
export class PropertyEditComponent implements OnInit {
  id: number;
  editMode = false;
  submitted = false;
  editForm: FormGroup;
  property: Property = new Property();
  propertyToUpdate: Property;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  goToList() {
    this.router.navigate(['/properties'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.editMode) {
      this.update;
    } else {
      this.create;
    }
    this.goToList();
  }

  private initForm() {
    if (this.editMode) {
      const property = this.propertyService.showProperty(this.id);
      property
        .pipe(first())
        .subscribe((data) => {
          this.editForm.patchValue(data);
          this.property = this.editForm.value;
        });
    }

    this.editForm = new FormGroup( {
      'title': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'room': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'size': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null),
      'comment': new FormControl(null),
      'sale_status': new FormControl(null)
    })
  }

  /**
   * Update a Property
   *
   */
  private update() {
    this.property = this.editForm.value;
    console.log(this.property);
    this.propertyService.update(this.id, this.property)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.propertyToUpdate = this.editForm.value;
        }, error => {
          console.log(error);
        }
      );
  }

  private create() {
    this.property = this.editForm.value;
    this.propertyService.save(this.property)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.propertyToUpdate = this.editForm.value;
        }, error => {
          console.log(error);
        }
      );
  }
}
