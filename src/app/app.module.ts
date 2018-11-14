import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountListComponent } from './components/accounts/account-list/account-list.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AccountAddComponent } from './components/accounts/account-add/account-add.component';
import { AccountEditComponent } from './components/accounts/account-edit/account-edit.component';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountAddComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    AccountService,
    { provide: MatDialogRef, useValue: {}} ,
    { provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [AccountEditComponent]
})
export class AppModule { }
