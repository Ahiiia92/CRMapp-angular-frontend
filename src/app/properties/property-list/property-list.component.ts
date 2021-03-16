import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Property} from "../../shared/models/property.model";
import {Observable} from "rxjs";
import {PropertyService} from "../../shared/services/property.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements OnInit {
  properties: Observable<Property[]>
  @Output() propertyWasSelected = new EventEmitter<Property>();

  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData()
  }

  onNewContact() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  private reloadData() {
    this.properties = this.propertyService.getAll();
  }
}
