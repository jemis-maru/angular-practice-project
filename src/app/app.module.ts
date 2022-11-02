import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CustomFormComponent } from './component/custom-form/custom-form.component';
import { CustomCardComponent } from './component/custom-card/custom-card.component';
import { ContentComponent } from './component/content/content.component';
import { FormsModule } from '@angular/forms';
import { BaseSelectComponent } from './component/base-select/base-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomFormComponent,
    CustomCardComponent,
    ContentComponent,
    BaseSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
