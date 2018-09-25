import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

    constructor (private elementRef: ElementRef){
        console.log(this.elementRef);
        // elementRef.nativeElement.style.backgroundColor = 'yellow';
        // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
        // this.elementRef.nativeElement.style.fontWeight = 'bold';
    }
}
