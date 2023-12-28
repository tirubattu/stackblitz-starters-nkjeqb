import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgContentExmpComponent } from './components/ng-content/ng-content-exmp/ng-content-exmp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgContentExmpComponent],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
