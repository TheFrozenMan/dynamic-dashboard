import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  private crd = inject(ChangeDetectorRef);
  private menuService = inject(MenuService);

  toggleMenu() {
    this.menuService.toggleMenu();
    this.crd.markForCheck();
  }
}
