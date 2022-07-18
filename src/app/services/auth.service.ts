import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { base_url } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  loginUser(data: any) {
    let api_url = base_url + '/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        // 'apikey': this.api_key
      }),
    };
    return this.http.post(api_url, data, httpOptions);
  }

  getUser() {
    let api_url = "https://award.face-cii.in/api/list-allocation";
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        // 'apikey': this.api_key
      }),
    };
    return this.http.get(api_url);
  }
}
