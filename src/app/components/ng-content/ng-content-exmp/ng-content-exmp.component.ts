import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-ng-content-exmp',
  templateUrl: './ng-content-exmp.component.html',
  styleUrls: ['./ng-content-exmp.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
})
export class NgContentExmpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
