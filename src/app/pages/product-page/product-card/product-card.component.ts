import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  id!: number;
  @Input()
  nom!: string;
  @Input()
  real!: string;
  @Input()
  synopsis!: string;
  @Input()
  annee!: Date;
  @Input()
  img!: string;
  @Input()
  details!: string;
  @Input()
  artiste!: string;
}
