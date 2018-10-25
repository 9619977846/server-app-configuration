import { Component, OnInit } from '@angular/core';
import { SeversAndAppsService } from './severs-and-apps.service';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'server-app-configuration';

  App1count = 1;
  App2count = 1;
  App3count = 1;
  App4count = 1;
  App5count = 1;

  applications = [];
  servers = [];

  constructor( private seversAndAppsService: SeversAndAppsService) {}

  ngOnInit() {
    this.applications = this.seversAndAppsService.getApplications();
    this.servers = this.seversAndAppsService.getServers();
  }

  incrementServers() {
    this.servers.push( {id: this.servers.length + 1, apps: [undefined, undefined]});

  }

  decrementServers() {

    if (this.servers.length > 0) {
    if (this.servers[this.servers.length - 1].apps[0] === this.applications[0]) {
      this.App1count--;
    }
    if (this.servers[this.servers.length - 1].apps[1] === this.applications[0]) {
      this.App1count--;
    }
     if (this.servers[this.servers.length - 1].apps[0] === this.applications[1] ) {
      this.App2count--;
    }

    if (this.servers[this.servers.length - 1].apps[1] === this.applications[1]) {
        this.App2count--;
      }

    if (this.servers[this.servers.length - 1].apps[0] === this.applications[2]) {
      this.App3count--;
    }
    if (this.servers[this.servers.length - 1].apps[1] === this.applications[2]) {
        this.App3count--;
      }

    if (this.servers[this.servers.length - 1].apps[0] === this.applications[3] ) {
        this.App4count--;
    }

    if ( this.servers[this.servers.length - 1].apps[1] === this.applications[3]) {
        this.App4count--;
    }
     if (this.servers[this.servers.length - 1].apps[0] === this.applications[4]) {
        this.App5count--;
    }

    if (this.servers[this.servers.length - 1].apps[1] === this.applications[4]) {
        this.App5count--;
    }
    this.servers.pop();
  }
  }

  addAppToServer(app) {

    for (const value of this.servers) {

        if (value.apps[0] === undefined) {
          if (app === this.applications[0] && this.App1count <= 2) {
            this.App1count++;
            value.apps[0] = app;
          } else if (app === this.applications[1] && this.App2count <= 2) {
            this.App2count++;
            value.apps[0] = app;
          } else if (app === this.applications[2] && this.App3count <= 2) {
            this.App3count++;
            value.apps[0] = app;
          } else if (app === this.applications[3] && this.App4count <= 2) {
            this.App4count++;
            value.apps[0] = app;
          } else if (app === this.applications[4] && this.App5count <= 2) {
            this.App5count++;
            value.apps[0] = app;
          }

          break;
        } else {
          if (value.id === this.servers.length ) {
            for (const value2 of this.servers) {

              if (value2.apps[1] === undefined) {
                if (app === this.applications[0] && this.App1count <= 2) {
                  this.App1count++;
                  value2.apps[1] = app;
                } else if (app === this.applications[1] && this.App2count <= 2) {
                  this.App2count++;
                  value2.apps[1] = app;
                } else if (app === this.applications[2] && this.App3count <= 2) {
                  this.App3count++;
                  value2.apps[1] = app;
                } else if (app === this.applications[3] && this.App4count <= 2) {
                  this.App4count++;
                  value2.apps[1] = app;
                } else if (app === this.applications[4] && this.App5count <= 2) {
                  this.App5count++;
                  value2.apps[1] = app;
                }

                break;
              } else {
                continue;
              }
            }
          }
          continue;
        }
    }

}

  removeAppFromServer(app) {

    for (const value of this.servers.slice().reverse()) {

      if (value.apps[1] === app) {
        value.apps[1] = undefined;
        break;
      }

      if (value.apps[0] === app) {
        value.apps[0] = undefined;
        break;
      }

     }
     if ( app === this.applications[0]) {
      this.App1count--;
     }

     if ( app === this.applications[1]) {
      this.App2count--;
     }

     if ( app === this.applications[2]) {
      this.App3count--;
     }

     if ( app === this.applications[3]) {
      this.App4count--;
     }

     if ( app === this.applications[4]) {
      this.App5count--;
     }
  }
}
