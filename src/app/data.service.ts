import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url = 'http://localhost:3000/Details';
  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get(this.url);
  }

  saveDetailsData(data: any){
    console.log(data);
    return this.http.post(this.url,data);

  }
}
