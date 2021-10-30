import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../../shared/models/contact.model";
import {ContactService} from "../../shared/services/contact.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})

export class ContactListComponent implements OnInit {
  collapsed = false;
  @Output() contactWasSelected = new EventEmitter<Contact>();
  contacts: Observable<Contact[]>;

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  onNewContact() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  private saveAsFile(buffer: any, fileName: string, fileType: string): void {
      const data: Blob = new Blob([buffer], { type: fileType });
      FileSaver.saveAs(data, fileName);
    }

  onExport() {
    this.contactService.export()
    .subscribe(resData => {
        this.saveAsFile(resData, "fileName.xlsx", "application/octet-stream");
        this.router.navigate(['/'], {relativeTo: this.route});
        alert('Contacts Exported in an Excel Sheet!');
      }, error => {
        console.log(error.message);
      });
  }

  private reloadData() {
    this.contacts = this.contactService.getAll();
  }
}
