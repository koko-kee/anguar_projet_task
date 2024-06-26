import {Component, inject, OnInit} from '@angular/core';
import { Task } from '../Task';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BorderErrorInputDirective } from '../border-error-input.directive';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgClass,
        NgIf,
        BorderErrorInputDirective,
    ],
})
export class TaskFormComponent implements OnInit{

  FormTask = this.fb.group({
    name:['',Validators.required],
    description:['',Validators.required],
    completed:[false],
  });

  task: Task | undefined;
 
  constructor(
    private router: ActivatedRoute,
    private taskService: TasksService,
    private route:Router,
    private fb : FormBuilder
  ){}



  ngOnInit(): void {
    let taskId = this.router.snapshot.paramMap.get('id')
    if(taskId)
    {
      this.taskService.showTask(+taskId)
      .subscribe((response) => this.task = response)
    }else{
      this.task = undefined
    }
  }

  onSubmit(event: Event) {

    event.preventDefault();
    this.FormTask.markAllAsTouched()
    if(this.FormTask.valid)
    {
      this.task = new Task()
      this.task.completed = this.FormTask.value.completed ?? false
      this.task.name = this.FormTask.value.name ?? ''
      this.task.description = this.FormTask.value.description ?? ''
      this.taskService.addTask(this.task).subscribe(
        () => {
          this.route.navigate(['']);
        },
        error => {
          console.error('erreur', error);
        }
      );
      console.log(this.FormTask.value)
    }

  }


  editTask(event : Event)
  {
    event.preventDefault();
    this.FormTask.markAllAsTouched()

    if(this.task != undefined && this.FormTask.valid)
    {
      this.task.name = this.FormTask.value.name ??  this.task.name
      this.task.description = this.FormTask.value.description ??  this.task.name
      this.task.completed = this.FormTask.value.completed ?? this.task.completed
      this.taskService.editTask(this.task.id,this.task).subscribe(
        (() => this.route.navigate(['task',this.task?.id])),
        ((error) => console.log('Erreur lors de le mise a jour',error))
      );
    }

  }


}
