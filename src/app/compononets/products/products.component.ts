import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts: Array<IProduct> = [];
  products: Array<IProduct> = [];
  currentPage: number = 1;
  showAlert: boolean = false;
  searcherNameInput: string = "";

  constructor(private service: GetProductsService) {

  }

  filterProducts(): void {
    setTimeout(() => {
      if(this.searcherNameInput.length >= 4) {
        this.products = this.allProducts
        .filter(product => product.name.toLowerCase().includes(this.searcherNameInput.toLowerCase()));
        this.showAlert = false;
      } else {
        this.products = this.allProducts;
        this.showAlert = true;
      }
     }, 1000);
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(products => {
      this.allProducts = products;
      this.products = products;
    })
  }

  orderByNameAsc(): void {
    this.service.sortProductsByNameAsc().subscribe(products => {
      this.searcherNameInput = '';
      this.showAlert = false;
      this.allProducts = products;
      this.products = products;
    })
  }

  orderByNameDesc(): void {
    this.service.sortProductsByNameDesc().subscribe(products => {
      this.searcherNameInput = '';
      this.showAlert = false;
      this.allProducts = products;
      this.products = products;
    })
  }

  orderBySlugAsc(): void {
    this.service.sortProductsBySlugAsc().subscribe(products => {
      this.searcherNameInput = '';
      this.showAlert = false;
      this.allProducts = products;
      this.products = products;
    })
  }

  orderBySlugDesc(): void {
    this.service.sortProductsBySlugDesc().subscribe(products => {
      this.searcherNameInput = '';
      this.showAlert = false;
      this.allProducts = products;
      this.products = products;
    })
  }
  orderByIdAsc(): void {
    this.service.sortProductsByIdAsc().subscribe(products => {
      this.searcherNameInput = '';
      this.showAlert = false;
      this.allProducts = products;
      this.products = products;
    })
  }

  orderByIdDesc(): void {
    this.service.sortProductsByIdDesc().subscribe(products => {
      this.searcherNameInput = '';
      this.showAlert = false;
      this.allProducts = products;
      this.products = products;
    })
  }

}
