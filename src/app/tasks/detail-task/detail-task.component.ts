import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../Task';
import { TasksService } from '../tasks.service';
import { PipeSetTextPipe } from '../pipe-set-text.pipe';
import { PipeColorStatutPipe } from '../pipe-color-statut.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-detail-task',
    templateUrl: './detail-task.component.html',
    styleUrl: './detail-task.component.css',
    standalone: true,
    imports: [NgIf, LoaderComponent, PipeColorStatutPipe, PipeSetTextPipe]
})
export class DetailTaskComponent implements OnInit {


  task:Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private TasksService:TasksService
  )
  {}

  ngOnInit(){

    const id:string|null = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      this.TasksService.showTask(+id)
      .subscribe((task) => this.task = task);
    }
  }

  goToBack()
  {
    this.router.navigate(['']);
  }
}
