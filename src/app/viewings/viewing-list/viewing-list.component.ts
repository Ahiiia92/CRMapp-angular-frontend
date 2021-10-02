import { Component, OnInit, Input } from '@angular/core';
import { Viewing } from '../../shared/models/viewing.model';

@Component({
  selector: 'app-viewing-list',
  templateUrl: './viewing-list.component.html',
  styleUrls: ['./viewing-list.component.sass']
})
export class ViewingListComponent implements OnInit {
  @Input() viewing: Viewing;
  @Input() identifier: number;
  constructor() { }

  ngOnInit(): void {
  }

}
