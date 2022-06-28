import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Record } from 'src/app/model/record';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mergeall',
  templateUrl: './mergeall.component.html',
  styleUrls: ['./mergeall.component.scss'],
})
export class MergeallComponent implements OnInit {
  record: Record[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.record = data.record;
    });
  }
}
