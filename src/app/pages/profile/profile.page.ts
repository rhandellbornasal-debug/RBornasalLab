import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  student: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.student = this.profileService.getStudent();
  }
}