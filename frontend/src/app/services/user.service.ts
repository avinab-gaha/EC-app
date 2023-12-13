import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: any;
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(this.API_URL + 'users');
  }
  viewUserData(id: any) {
    return this.http.get(`${this.API_URL}users/${id}`);
  }

  addUserData(data: number) {
    return this.http.post(`${this.API_URL}users`, data);
  }

  deleteUserData(id: number) {
    return this.http.delete(`${this.API_URL}users/${id}`);
  }

  updateUserData(id: number, data: any) {
    return this.http.put(`${this.API_URL}users/${id}`, data);
  }

}
