import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-detail-pages',
  templateUrl: './detail-pages.component.html',
  styleUrls: ['./detail-pages.component.scss'],
})
export class DetailPagesComponent implements OnInit {
  films = new ProductPageComponent().films;
  albums = new ProductPageComponent().albums;
  products = this.films.concat(this.albums);

  product!: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if (id){
      this.product=this.products.find((product)=>product.id==id);
    }
  }
}
