import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModel } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }
  serviceUrl: string = "https://reqres.in/api/users";

  getUsers(): Observable<ApiResponseModel> {

    return this.httpClient.get<ApiResponseModel>(this.serviceUrl)

  }
}