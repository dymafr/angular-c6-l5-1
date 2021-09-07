import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[monSurlignage]' })
export class SurlignerDirective {
  constructor() {}

  @HostBinding('style.backgroundColor') couleur?: string;
  @Input() couleurSurlignage?: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.couleur = this.couleurSurlignage;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.couleur = undefined;
  }
}
