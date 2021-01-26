import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url = '';
  name: any;
  data: any;
  website: any;
  img: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  

  constructor(private breakpointObserver: BreakpointObserver,private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSelectFile(some: any) {
    if (some.target.files) {
      var reader = new FileReader();

      reader.readAsDataURL(some.target.files[0]);

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  save() {
    let url = ""
    let obj = {
      data: this.data,
      name: this.name,
      website: this.website,
      image: this.img
    }
    this.http.post(url, obj).toPromise().then((data: any) => {
      console.log(data)
    })

  }

}
