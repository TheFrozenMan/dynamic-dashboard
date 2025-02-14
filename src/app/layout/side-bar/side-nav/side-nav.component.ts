import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../services/menu.service';

export type MenuItem = {
  icon: string;
  label: string;
  route?: any;
};

/*
TODO:
we need to redo the old behaver when we close the
don't forget to connect the behaver on the side-nav
*/

@Component({
  selector: 'app-side-nav',
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  isMenuOpen: boolean = true;
  private menuService = inject(MenuService);
  isMenuOpen$ = this.menuService.menuOpen$;
  //FIXME: don't forget to check from this one later
  // private crd = inject(ChangeDetectorRef);

  menuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'pets',
      label: 'Vets',
      route: 'vets',
    },
    {
      icon: 'people',
      label: 'Users',
      route: 'users',
    },
  ]);

  ngOnInit(): void {
    //FIXME: don't forget to check from this one later
    // this.isMenuOpen$.subscribe(() => {
    //   this.crd.detectChanges();
    // });
  }
}
