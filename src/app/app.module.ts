import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from '../app/Components/footer/footer.component';
import { MainPageComponent } from '../app/Components/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './Components/modal/modal.component';
import { ExchangeComponent } from './Components/exchange/exchange.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ModalComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
