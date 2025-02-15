import { Type } from '@angular/core';

export interface Widget {
  id: number;
  name: string;
  content: Type<unknown>;
}
