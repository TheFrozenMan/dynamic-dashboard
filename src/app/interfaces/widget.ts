import { Type } from '@angular/core';

export interface Widget {
  id: number;
  name: string;
  content: Type<unknown>;
  order?: number;
  hight?: number;
  width?: number;
  selection?: boolean;
  color?: string;
}
