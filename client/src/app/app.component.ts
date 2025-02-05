import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
      this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
        next: response => this.products = response.data,
        error: error => console.log(error), // what to do when the request fails
        complete: () => {
          console.log('Request completed');
        }
      })
  }
}
