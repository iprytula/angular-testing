import { Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserInterface[] = [];

  addUser(user: UserInterface): void {
    this.users.push(user);
  }

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  constructor() { }
}
