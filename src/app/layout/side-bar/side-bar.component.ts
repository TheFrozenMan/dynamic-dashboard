import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable, share } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-side-bar',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    SideNavComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  isMenuOpen: boolean = true;
  private menuService = inject(MenuService);

  private crd = inject(ChangeDetectorRef);

  isMenuOpen$ = this.menuService.menuOpen$;

  ngOnInit() {
    this.isMenuOpen$.subscribe(() => {
      this.crd.detectChanges();
    });
  }
}
