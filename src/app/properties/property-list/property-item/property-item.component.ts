import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Property} from "../../../shared/models/property.model";

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.sass']
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;
  @Output() selectedProperty = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.selectedProperty.emit();
  }
}
