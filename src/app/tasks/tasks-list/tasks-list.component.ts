import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from '../Task';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import {
  Observable,
  Subject,
  combineLatest,
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { FormBuilder,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})

export class TasksListComponent{

  search = this.fb.nonNullable.group({
    name:[''],
    completed:[false]
  });

  constructor(
    private route: Router, 
    private TasksService: TasksService,
    private fb : FormBuilder
  )
  {}
  // serachTerms = new Subject<string>();

  tasks$: Observable<Task[]> = 
  combineLatest([
    this.TasksService.getAllTask(),
    this.search.controls.name.valueChanges.pipe(startWith('')),
    this.search.controls.completed.valueChanges.pipe(startWith(false))
  ])
  .pipe(
    switchMap(([task,name,completed]) => this.TasksService.searchTask({name,completed}))
  )

  // searchBox(term: string) {
  //   this.serachTerms.next(term);
  // }

  remove(id: number) {
    this.TasksService.delete(id).subscribe((response) =>
      response == null ? this.goToItemTask(id) : console.log('erreur')
    );
  }

  editRoute(id: number) {
    this.route.navigate(['task/edit/', id]);
  }

  goToItemTask(id: number) {
    this.route.navigate(['task', id]);
  }

  goToForm() {
    this.route.navigate(['task/create']);
  }

  goToList() {
    this.route.navigate(['']);
  }
}
