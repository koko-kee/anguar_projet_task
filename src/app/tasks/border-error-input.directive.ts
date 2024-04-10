import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[BorderErrorInput]',
    standalone: true
})
export class BorderErrorInputDirective {

  @HostBinding('style.border-color')
  color = 'red'




}
