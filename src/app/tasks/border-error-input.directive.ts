import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[BorderErrorInput]'
})
export class BorderErrorInputDirective {

  @HostBinding('style.border-color')
  color = 'red'




}
