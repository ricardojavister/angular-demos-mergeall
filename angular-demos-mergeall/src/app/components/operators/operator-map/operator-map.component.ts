import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subscription } from 'rxjs';
import { Record } from 'src/app/model/record';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-operator-map',
  templateUrl: './operator-map.component.html',
  styleUrls: ['./operator-map.component.scss'],
})
export class OperatorMapComponent implements OnInit {
  records: Record[] = [];
  record!: Record;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.records = data.record;
    });
  }

  mapRecord(value: number) {
    this.productService
      .getProducts()
      .pipe(map((x) => x.record))
      .subscribe((data) => {
        this.record = data[value];
      });
  }
}
