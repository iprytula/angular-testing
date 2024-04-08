import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { UserInterface } from '../types/user.interface';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("addUser", () => {
    it("should add a user", () => {
      const user: UserInterface = {
        id: "1",
        name: "Piotr"
      };

      service.addUser(user);
      expect(service.users).toEqual([user]);
    });
  });
});
