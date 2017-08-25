import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
   template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  ngOnInit(){
    if(localStorage.getItem("chinese") == "true"){
      this.title = "你好，米克！"
    }else{
      this.title = "hello mike!";
    }
  }
  showChinese(){
    localStorage.setItem("chinese","true");
    this.title = "你好，米克！";
  }
  showEnlish(){
    localStorage.setItem("chinese","false");
    this.title = "hello mike!";
  }

}
