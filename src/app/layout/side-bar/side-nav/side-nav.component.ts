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
  private crd = inject(ChangeDetectorRef);

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
    this.isMenuOpen$.subscribe(() => {
      this.crd.detectChanges();
    });
  }
}
