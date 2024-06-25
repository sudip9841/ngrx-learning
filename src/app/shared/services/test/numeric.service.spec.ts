import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { NumericService } from './numeric.service';
import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';

export const users = {
  1:{
    id:1,
    name:'sudip',
    age:'24',
    dob:'1999-07-03'
  },
  2:{
    id:2,
    name:'hari',
    age:'23',
    dob:'2000-07-03'
  }
}

fdescribe('NumericService', () => {
  let service: NumericService;
  let userService: UserService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[NumericService,UserService]
    });
    service = TestBed.inject(NumericService);
    userService = TestBed.inject(UserService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should be multiple of two numbers",()=>{
    const result = service.multipleOfTwo(5,2);
    expect(result).toBe(10);
  });

  it("should call displayName function",()=>{
    spyOn(userService,"displayName");
    const result = service.multipleOfTwo(7,7);
    expect(userService.displayName).toHaveBeenCalled();
  })

  it("should make call user list api",()=>{
    userService.getUsers().subscribe((users:any)=>{
      expect(users).toBeTruthy();
      expect(users.length).toBe(2);
    });
    const mockReq = testingController.expectOne(`${environment.api_url}/users`);
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(users))
  })

  it("should return user with specific id",()=>{
    userService.getUserById(2).subscribe((user:any)=>{
      console.log(user);
      expect(user).toBeTruthy();
      expect(user?.id).toBe(2);
    });

    const mockReq = testingController.expectOne(`${environment.api_url}/users/2`);
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(users))
  })

});
