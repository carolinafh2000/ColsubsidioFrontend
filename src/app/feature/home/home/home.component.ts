import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public first_url: String = "list";
  public second_url: String = "create";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
