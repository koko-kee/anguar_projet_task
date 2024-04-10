import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipeColorStatut',
    standalone: true
})
export class PipeColorStatutPipe implements PipeTransform {

  transform(completed: boolean){
    if(completed)
    {
      return "bg-lime-400"
    }
    return "bg-red-400";
  }

}
