import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  @Input()
  application;

  @Output()
  addAppToServer: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  removeAppFromServer: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addApplication(application) {
    this.addAppToServer.emit(application);
  }

  removeApplication(application) {
    this.removeAppFromServer.emit(application);
  }
}
