import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'chartreuse', 'brown'];

  constructor(private el: ElementRef) {}

  @HostBinding('style.color') textColor: string = 'black';
  @HostBinding('style.border-color') borderColor: string = 'transparent'; // Set an initial border color

  @HostListener('keyup') onKeyup() {
    this.changeColor();
  }

  private changeColor() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }

}
