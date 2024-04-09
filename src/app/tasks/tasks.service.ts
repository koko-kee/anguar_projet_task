import { Injectable } from '@angular/core';
import { SearchTask, Task } from './Task';
import { TASKS } from './datas-task';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
//providedIn: 'root' // indique qu'on veut utiliser la meme instance du service a travers toute l'application a travers l'injection de dependance
export class TasksService{

  constructor(private http : HttpClient)
  {}

  getAllTask(): Observable<Task[]>
  {
    return this.http.get<Task[]>('api/tasks').pipe(
      tap((response) => this.successResponse(response)),
      catchError((error) => this.errorResponse(error))
    )
  }

  successResponse(response:any)
  {
    console.log(response)
  }

  errorResponse(error:any):Observable<any|[]>
  {
    console.log(error)
    return of([])
  }

  addTask(task: Task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post('api/tasks', task, httpOptions).pipe(
      catchError(error =>{
        console.error('Erreur lors de l\'ajout de la tâche :', error);
        throw error;
      })
    );
  }

  editTask(task: Task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(`api/tasks`, task, httpOptions).pipe(
      catchError(error =>{
        console.error('', error);
        throw error;
      })
    );
  }

  searchTask(searchTask: SearchTask):Observable<Task[]>
  {
    let params = new HttpParams();

    if(searchTask.name) params = params.append('name',searchTask.name);
    if(searchTask.completed) params = params.append('completed',true);

    return this.http.get<Task[]>("api/tasks",{params}).pipe(
        tap((response) => console.table(response)),
        catchError((error) => {
          console.log(error)
          return of([]);
        })
    )
  }

  showTask(taskId:number):Observable<Task>
  {
    return this.http.get<Task>(`api/tasks/${taskId}`).pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.log(error)
        return of();
      })
    )
  }

  delete(taskId: number): Observable<null> {
    return this.http.delete<null>(`api/tasks/${taskId}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }


}
