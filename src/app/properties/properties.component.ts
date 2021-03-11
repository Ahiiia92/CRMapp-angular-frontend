import {Component, Input, OnInit} from '@angular/core';
import {Property} from "../shared/models/property.model";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass']
})
export class PropertiesComponent implements OnInit {
  @Input() selectedProperty: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
