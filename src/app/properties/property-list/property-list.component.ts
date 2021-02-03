import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Property} from "../property.model";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [
    new Property('Les Magniolas', '2 rue du stade, 10150 Montsuzain', 657_000, 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80'),
    new Property('Le Belle Vie', '239 Broadway, 95390 Sun-City', 1_500_000, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'),
    new Property('Les Rurales', '4 boulevard Montant, 33940 Brodeaux', 345_000, 'https://images.unsplash.com/photo-1472377622610-57ef965c89f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'),
    new Property('Les Citadines', '39 avenue Maya Angelou, 84932 Sainte-Lucie', 457_000, 'https://images.unsplash.com/photo-1585144287472-4797f018d8da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80')
  ];
  @Output() propertyWasSelected = new EventEmitter<Property>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedProperty(property: Property) {
    this.propertyWasSelected.emit(property);
  }
}
