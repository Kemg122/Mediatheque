import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import angular material
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { NotFoundComponent } from './_commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListComponent } from './pages/product-page/product-list/product-list.component';
import { ProductCardComponent } from './pages/product-page/product-card/product-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
