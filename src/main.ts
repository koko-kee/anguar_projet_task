import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' } ,
    {
        path: '',
        loadChildren: () => import("./app/tasks/task.routes").then(module => module.routesTask)
    }
];



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule),
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
