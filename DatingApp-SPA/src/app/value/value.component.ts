import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-value",
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"]
})
//Change between Alt+ o alt+U to inspect
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) {}

  //On initialization load component values from API.
  ngOnInit() {
    this.getValues();
  }
  getValues() {
    // Returns an observable
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => {
        this.values = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
