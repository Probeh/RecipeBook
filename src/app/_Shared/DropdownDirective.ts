import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //#region Properties

  /* @HostListener ( = addEventListener ) Listens For A 'Click' Event
     From Any Element Throughout The Parent Module,
     Decorated With The Directive Selector 'appDropdown'
     And Later Proceeds With A Callback Function Declared
     Inside The Block Scope 'toggleOpen' */
  @HostListener('click') public toggleOpen() {
  this.isOpen = !this.isOpen;
  }
  /* HostBinding takes an optional parameter that specifies the property name
     of the host element that will be updated.
     When not provided, the class property name is used. */
  @HostBinding('class.open') public isOpen: boolean = false;

  //#endregion

  constructor() {}
}
