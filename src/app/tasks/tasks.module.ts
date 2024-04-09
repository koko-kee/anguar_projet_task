import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { RouterModule, Routes } from '@angular/router';
import { PipeColorStatutPipe } from './pipe-color-statut.pipe';
import { PipeSetTextPipe } from './pipe-set-text.pipe';
import { TasksService } from './tasks.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { LoaderComponent } from './loader/loader.component';
import { ColorStatuSpanPipe } from './color-statu-span.pipe';
import { BorderErrorInputDirective } from './border-error-input.directive';

const routesTask: Routes = [
  {path:'',component:TasksListComponent},
  {path:'task/create',component:TaskFormComponent},
  {path:'task/delete/:id',component:DetailTaskComponent},
  {path:'task/edit/:id',component:TaskFormComponent},
  {path:'task/:id',component:DetailTaskComponent},
];

@NgModule({
  declarations: [
    TasksListComponent,
    DetailTaskComponent,
    PipeColorStatutPipe,
    PipeSetTextPipe,
    TaskFormComponent,
    LoaderComponent,
    ColorStatuSpanPipe,
    BorderErrorInputDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesTask)
  ],
  providers:[
    TasksService
  ]
})
export class TasksModule { }
