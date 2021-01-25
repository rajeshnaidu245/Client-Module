import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }
  onsubmit(data: any){
    this.http.post("https://jsonplaceholder.typicode.com/posts",data);
    
    
    console.log(data);
  }

  ngOnInit(): void {
  }

}
