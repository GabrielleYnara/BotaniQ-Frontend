import { Component, NgModule , OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string | null = "";

  ngOnInit(): void {
    this.userName = localStorage.getItem("userFirstName");
    if (this.userName === "null"){
      this.userName = "";
    }
  }

}
