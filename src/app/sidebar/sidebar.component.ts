import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  styles: [`.active { border-bottom: 2px solid #FF006E}`]
})
export class SidebarComponent implements OnInit {

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
