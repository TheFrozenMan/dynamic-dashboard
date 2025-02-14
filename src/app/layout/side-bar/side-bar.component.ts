import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable, share } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenuService } from '../../services/menu.service';
import { MatDrawer } from '@angular/material/sidenav';
/*
TODO:
we need to redo the old behaver when we close the
don't forget to connect the behaver on the side-nav
*/
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
  @ViewChild('drawer') drawer!: MatDrawer; // Get reference to the drawer

  private menuService = inject(MenuService);

  private crd = inject(ChangeDetectorRef);

  isMenuOpen$ = this.menuService.menuOpen$;

  //FIXME: this need to be change in the future to  to return the old behaver
  ngOnInit() {
    this.isMenuOpen$.subscribe((res: boolean) => {
      this.drawer?.toggle(res);
      this.crd.detectChanges();
    });
  }
}
