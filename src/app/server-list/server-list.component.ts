import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class ServerListComponent implements OnInit {
  @Input() servers: any;
  constructor() { }

  ngOnInit() {
  }

}
