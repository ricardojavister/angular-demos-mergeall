import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/model/record';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Record;
  constructor() {}

  ngOnInit(): void {}
}
