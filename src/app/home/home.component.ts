import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './shared/home.service';
import { ApiResponseModel } from './shared/api-response.model';
import { UserModel } from './shared/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  users: UserModel[] = [];
  subscription = new Subscription;

  constructor(private homeservice: HomeService) { }
  ngOnInit() {
    this.initialUsers();
  }

  private initialUsers() {
    //call api service
    this.subscription = this.homeservice.getUsers().subscribe(
      (response: ApiResponseModel) => {
        this.userCallBackResponse(response);
      },
      err => {
        console.error("This Api cannot be called.", err);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }
  private userCallBackResponse(response: ApiResponseModel) {
    this.users = response.data;
    console.log(this.users);
  }
}