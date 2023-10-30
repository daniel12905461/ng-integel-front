import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menuShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    this.menuShow ? this.menuShow = false : this.menuShow = true;
  }
}
