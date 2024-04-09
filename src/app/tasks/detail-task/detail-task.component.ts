import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../Task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrl: './detail-task.component.css'
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
