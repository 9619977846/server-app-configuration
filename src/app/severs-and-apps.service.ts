import { Injectable } from '@angular/core';

export interface Server  {
  id: number;
  apps: any;
}

@Injectable()
export class SeversAndAppsService {
  servers: Server[];
  constructor() { }

  getApplications() {
    return ['Hadoop', 'Rails', 'Chronos', 'Storm', 'Spark'];
  }

  getServers() {
     return  this.servers = [
      {id: 1, apps: [undefined, undefined]},
      {id: 2, apps: [undefined, undefined]},
      {id: 3, apps: [undefined, undefined]},
      {id: 4, apps: [undefined, undefined]},

  ];
  }
}
