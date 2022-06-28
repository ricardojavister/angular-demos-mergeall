import { Component, OnInit } from '@angular/core';
import { map, mergeAll, Observable, of } from 'rxjs';
import { Record } from 'src/app/model/record';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  record: Record[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  addItem(name: string) {}

  getProducts(): void {
    const fruits$ = new Observable((observer) => {
      observer.next('Cereza');
      observer.next('Mandarina');
      observer.next('Pera');
      observer.complete();
    });

    fruits$
      .pipe(
        map((x) => {
          return this.productService.getProductsByName(`${x}`);
        }),
        mergeAll()
      )
      .subscribe((x) => {
        this.record.push(x);
      });
  }
}
