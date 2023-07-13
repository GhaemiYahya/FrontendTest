import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiResponseModel } from './api-response.model';
import { UserModel } from './user.model';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;
  let users: UserModel[] = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users', () => {
    const mockResponse: ApiResponseModel = {
      status: '',
      data: users,
      message: ''
    };

    service.getUsers().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service.serviceUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});