import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private student = {
    name: 'Rhandell Bornasal',
    username: 'rhndll',
    email: 'rhandellbornasal08@email.com',
    address: 'Valenzuela City',
    image: 'assets/images/profile.jpg'
  };

  constructor() {}

  getStudent() {
    return this.student;
  }
}