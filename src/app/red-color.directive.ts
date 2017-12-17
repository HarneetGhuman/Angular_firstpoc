import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[RedColor]'
})
export class RedColorDirective {

  constructor(element : ElementRef) {
  	element.nativeElement.style.color = "Red";
   }

}
