import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Viewing } from 'src/app/shared/models/viewing.model';
import { ViewingService } from 'src/app/shared/services/viewing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewing-details',
  templateUrl: './viewing-details.component.html',
  styleUrls: ['./viewing-details.component.sass']
})
export class ViewingDetailsComponent implements OnInit, OnDestroy {
  viewing: Viewing;
  show: false;
  id: number;
  private viewingChangeSub: Subscription;

  constructor(private viewingService: ViewingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.viewing = new Viewing();
        this.viewingChangeSub = this.viewingService.show(this.id)
          .subscribe(resData => {
            this.viewing = resData;
          }, error => {
            console.log(error.message);
          });
      }, error => {
        console.log(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.viewingChangeSub.unsubscribe();
  }

  onEditViewing() {
    this.router.navigate(['viewing'], { relativeTo: this.route });
  }

  onDeleteViewing(id: number) {
    this.viewingService.delete(id)
      .subscribe(
        (resData) => {
          console.log(resData);
          this.router.navigate(['../'], { relativeTo: this.route});
          alert('Viewing deleted');
        }, error => {
          console.log(error.message);
        });
  }
}
