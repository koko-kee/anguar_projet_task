import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSetText'
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
