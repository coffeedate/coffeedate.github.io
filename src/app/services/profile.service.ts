import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

//The main url that is shared with the api serivce
export const url = 'http://localhost:5000';

@Injectable()
export class ProfileService {

  constructor( private http: Http ) { }

  getProfile(profileID: number) {
    return this.http.get( url + '/api/getProfile/?index=' + profileID);
  }

  getLabels() {
    return this.http.get( url + '/api/getLabels/');
  }

  postLabel(index: number, label: number) {
    let data = {
      'index': index,
      'label': label,
    };
    console.log("yee")
    console.log(data);

    return this.http.post(url + '/api/makeLabel/', data);
  }

}
