import { Widget } from './../../interfaces/widget';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  data = input.required<Widget>();
}
