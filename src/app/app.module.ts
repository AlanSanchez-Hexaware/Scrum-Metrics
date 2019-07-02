import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';


import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSidenavModule,
  MatTabsModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DocsComponent } from './docs/docs.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    SidenavListComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DocsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    RoutingModule,
    FlexLayoutModule,
    MatListModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
