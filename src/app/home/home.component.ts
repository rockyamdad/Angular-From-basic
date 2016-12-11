import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() animal;
  constructor() { }

  caption = 'This is Home Component';
  header = 'i like Trekking';
  privacy = true;

  @Output() onListen = new EventEmitter();

  person ={
    name: 'Rocky',
    hobby: 'Trekking',
    age: 27
  };

  workFire(e){
    this.onListen.emit(e);
  }
  getMessage(value){
    alert(value);
  }
  ngOnInit() {
  }

}
