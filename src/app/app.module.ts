import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child1Component } from './child1/child1.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive'
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
    LoginComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    Child1Component,
    UsdInrPipe,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
