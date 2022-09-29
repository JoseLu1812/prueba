import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {

  icon = 'dark_mode';
  style = 'light-mode';

  constructor() { }

  ngOnInit(): void {
  }

  changeMode(){
    if(this.style == 'light-mode'){
      this.style = 'dark-mode';
      this.icon = 'light_mode';
    }else{
      this.style = 'light-mode';
      this.icon = 'dark_mode';
    }
  }



}
