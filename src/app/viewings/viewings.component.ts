import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Viewing } from "../shared/models/viewing.model";

@Component({
  selector: 'app-viewings',
  templateUrl: './viewings.component.html',
  styleUrls: ['./viewings.component.sass']
})
export class ViewingsComponent implements OnInit {
  viewings: Observable<Viewing[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
