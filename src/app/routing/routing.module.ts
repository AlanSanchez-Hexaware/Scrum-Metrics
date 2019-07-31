import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DocsComponent } from '../docs/docs.component';
import { NotFoundComponent } from '../error-pages/not-found/not-found.component';
import { MainhomeComponent } from '../mainhome.component';
import { ApphomeComponent } from '../apphome.component';
import { ApplandingComponent } from '../applanding/applanding.component';
import { AuthGuard } from '../auth.guard';
import { ProjectsComponent } from '../projects/projects.component';
import { CurrentprojComponent } from '../projects/currentproj/currentproj.component';

const routes: Routes = [
  { path: 'start', component: MainhomeComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/start/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'documentation', component: DocsComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/start/404', pathMatch: 'full' }
  ] },
  { path: '', redirectTo: '/start/home', pathMatch: 'full' },
  { path: 'app', component: ApphomeComponent, canActivate: [AuthGuard], children: [
    { path: 'project', component: ApplandingComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'currentproject', component: CurrentprojComponent },
    { path: '', redirectTo: '/app/project', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/app/404', pathMatch: 'full' }
  ] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/start/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
