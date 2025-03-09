import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Widget } from './../../interfaces/widget';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-widget',
  imports: [MatCardModule, CommonModule, NgComponentOutlet],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  data = input.required<Widget>();
}
