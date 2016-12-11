import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private  router :Router){

  }
  onGoHome(){
    this.router.navigate(['contact']);
  }
  title = 'Angular 2 test Apllication';
  name = 'Rocky From RBS';

  animals ={
    'name':'Cat',
    'type': 'Persian'
  };
  fire(e){
    alert('i am listening');
  }

}
