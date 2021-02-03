import {Component, Input, OnInit} from '@angular/core';
import {Property} from "../../property.model";

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.sass']
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
