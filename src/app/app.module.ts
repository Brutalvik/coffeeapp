//Module Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './Store/Reducers/store.reducer';
import { MaterialModule } from './Modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreEffects } from './Store/Effects/store.effects';

//Component Imports
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './assets/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductdetailsComponent,
    HeaderComponent,
    SidenavComponent,
    CardComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({ ui: appReducer }),
    EffectsModule.forRoot([StoreEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
