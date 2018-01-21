import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  providers: [ProfileService]
})
export class TrainingComponent implements OnInit {

  currentProfileID = 0;
  currentProfile;
  isMore = true;
  labels;

  constructor(private http: Http, private ProfileServiceService: ProfileService) {
   }

  ngOnInit() {
    this.getProfile(this.currentProfileID);
  }

  getProfile(profileID: number) {
    this.ProfileServiceService.getProfile(profileID).subscribe( (data) => {
        this.currentProfile = JSON.parse(data['_body']);
        console.log(this.currentProfile);
      }

    );
  }

  getLabels() {
    this.ProfileServiceService.getLabels().subscribe( (data) => {
      this.labels = JSON.parse(data['_body']);
      console.log(this.labels);
    });
  }

  pushLabel(index: number, label: number) {
    this.ProfileServiceService.postLabel(index, label).subscribe(
      (data) => {
        console.log(data);
        if (this.currentProfileID < 399) {
          this.currentProfileID = this.currentProfileID + 1;
          this.getProfile(this.currentProfileID);
        } else {
          this.isMore = false;
          this.currentProfile = [];
          this.getLabels();
        }
      },
      (err) => {console.log(err); });
  }


}
