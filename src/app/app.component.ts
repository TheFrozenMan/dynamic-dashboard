import { Component } from '@angular/core';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [SideBarComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
