import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute ,RouterModule} from "@angular/router";
import { HomeListComponent } from '../home-list/home-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf,RouterModule,HomeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 userName :any
 homePageUrl :any
  constructor(private activatedRoute:ActivatedRoute) {
    activatedRoute.paramMap.subscribe((params:any) => {
      this.userName = params.get("userName"); //+ string to number
      this.homePageUrl='home/:'+this.userName
    });
  }
 
}
