import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkylanderService {

  constructor(private http: HttpClient) { }

  getListeSkylanders() {
    return this.http.get('http://localhost:5175/api/Skylander');
  }
}
