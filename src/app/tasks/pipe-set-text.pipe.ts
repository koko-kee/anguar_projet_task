import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipeSetText',
    standalone: true
})
export class PipeSetTextPipe implements PipeTransform {

  transform(completed: boolean){
    if(completed)
    {
      return "Terminer"
    }
    return "A faire";
  }


}
