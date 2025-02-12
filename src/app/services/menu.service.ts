import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuOpen = new BehaviorSubject<boolean>(false); // Default: menu closed
  menuOpen$ = this.menuOpen.asObservable();

  toggleMenu() {
    this.menuOpen.next(!this.menuOpen.value);
  }

  setMenuState(state: boolean) {
    this.menuOpen.next(state);
  }

  getMenuStatus() {
    return this.menuOpen.value;
  }

  constructor() {}
}
