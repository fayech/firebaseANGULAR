import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { AngularFireModule}from '@angular/fire';
 import { AngularFireDatabaseModule}from '@angular/fire/database';
 import { environment } from '../environments/environment';
 import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {CrudService} from './service/crud.service';
import { BarcodeComponent } from './barcode/barcode.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
