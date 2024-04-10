import { Routes } from "@angular/router";
import { TasksService } from "./tasks.service";


export  const routesTask: Routes = [
    {
      path:'',
      providers:[TasksService],
      children: [
        {path:'',loadComponent: () => import('./tasks-list/tasks-list.component').then(module => module.TasksListComponent)},
        {path:'task/create',loadComponent: () => import('./task-form/task-form.component').then(module => module.TaskFormComponent)},
        {path:'task/delete/:id',loadComponent: () => import('./detail-task/detail-task.component').then(module => module.DetailTaskComponent)},
        {path:'task/edit/:id',loadComponent: () => import('./task-form/task-form.component').then(module => module.TaskFormComponent)},
        {path:'task/:id',loadComponent: () => import('./detail-task/detail-task.component').then(module => module.DetailTaskComponent)},
      ]
    }   
];