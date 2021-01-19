import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  isTheme1= false;
  isTheme2= false;
  isTheme3= false;

  constructor() { }

  ngOnInit(): void {
  }

  showTheme1(){
    this.isTheme1 =true;

  }

  showTheme2(){
    this.isTheme2 =true;
  }

  showTheme3(){
    
    this.isTheme3 =true;
  }

}
