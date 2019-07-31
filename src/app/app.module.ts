import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSidenavModule,
  MatTabsModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatNativeDateModule,
  DateAdapter,
  MatFormFieldModule
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
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppHeaderComponent } from './navigation/app-header/app-header.component';
import { MainhomeComponent } from './mainhome.component';
import { ApphomeComponent } from './apphome.component';
import { AppSidenavListComponent } from './navigation/app-sidenav-list/app-sidenav-list.component';
import { ApplandingComponent } from './applanding/applanding.component';
import { NewProjectComponent } from './newproject.component';
import { ProfileComponent } from './profile.component';
import { DateFormat } from './date-format';
import { AuthGuard } from './auth.guard';
import { ProjectsComponent } from './projects/projects.component';
import { CurrentprojComponent } from './projects/currentproj/currentproj.component';

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
    NotFoundComponent,
    AppHeaderComponent,
    MainhomeComponent,
    ApphomeComponent,
    AppSidenavListComponent,
    ApplandingComponent,
    NewProjectComponent,
    ProfileComponent,
    ProjectsComponent,
    CurrentprojComponent
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
    MatCheckboxModule,
    HttpClientModule,
    StoreModule,
    MatRadioModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  providers: [
    MatDatepickerModule,
    FormControl,
     { provide: DateAdapter, useClass: DateFormat },
    AuthGuard
    ],
  bootstrap: [AppComponent],
  entryComponents: [NewProjectComponent, ProfileComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); // DD/MM/YYYY
  }
}
