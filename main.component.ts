import { Component, HostListener, Renderer2, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-main',
  styleUrls: [
    './main.component.css',
   
  ],
  templateUrl: './main.component.html'
})
export class MainComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollOffset = this.el.nativeElement.offsetTop;
    const scrolled = window.scrollY;

    if (scrolled > scrollOffset) {
      this.renderer.addClass(this.el.nativeElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'scrolled');
    }
  }

}
