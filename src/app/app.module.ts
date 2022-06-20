//Module Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './Modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './Store/reducers/app.reducer';
import { AppService } from './shared/app.services';

//Component Imports
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductdetailsComponent,
    HeaderComponent,
    SidenavComponent,
    CardComponent,
    LoaderComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([StoreEffects]),
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
