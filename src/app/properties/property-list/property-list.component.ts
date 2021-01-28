import { Component, OnInit } from '@angular/core';
import {Property} from "../property.model";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [
    new Property('Les Magniolas', '2 rue du stade, 10150 Montsuzain', 345_000, 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80'),
    new Property('Les Magniolas', '2 rue du stade, 10150 Montsuzain', 345_000, 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80'),
    new Property('Les Magniolas', '2 rue du stade, 10150 Montsuzain', 345_000, 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80'),
    new Property('Les Magniolas', '2 rue du stade, 10150 Montsuzain', 345_000, 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
