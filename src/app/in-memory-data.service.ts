import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

import { TASKS } from './tasks/datas-task';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const tasks = TASKS;
    return {tasks};
  }
}
