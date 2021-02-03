import {Component, Input, OnInit, Output} from '@angular/core';
import {Property} from "../property.model";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.sass']
})
export class PropertyDetailComponent implements OnInit {
  @Input() property: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
