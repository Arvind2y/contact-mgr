import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/shared/header/search.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SiComponent } from './components/data-binding/si/si.component';
import { PbComponent } from './components/data-binding/pb/pb.component';
import { CpbComponent } from './components/data-binding/cpb/cpb.component';
import { EbComponent } from './components/data-binding/eb/eb.component';

//Decorator 
//Main switch box for the entire ng app
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NavComponent,
    SiComponent,
    PbComponent,
    CpbComponent,
    EbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]    // Module should be bootstraped with a component 
})
export class AppModule { }
