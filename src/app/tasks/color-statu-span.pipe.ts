import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'colorStatuSpan',
    standalone: true
})
export class ColorStatuSpanPipe implements PipeTransform {

  transform(completed: boolean){
    if(completed)
    {
      return "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
    }
    return "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300";
  }

}
